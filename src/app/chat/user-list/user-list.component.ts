import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user-service.service";
import {FormControl} from "@angular/forms";
import {ChatService} from "../../services/chat.service";
import {ActivatedRoute} from "@angular/router";
import {Message} from "../../models/message.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  friends!:User[]
  @Input() users!:User[]
  listToFilter!:User[]
  filteredUsers:User[] = []
  profile!:User
  selectedUser!:string
  listFriends = false
  connectedUsers:string[] = []
  messageCounts:any = {}


  search = new FormControl('')

  constructor(private _userService:UserService,
              private _chatService:ChatService,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe((val:any)=>{
      this.profile = val.body

      this.getUsers()
      this.getFriends()
      this.showUsers()
    })



    this.search.valueChanges.subscribe(value => {
      this.filteredUsers = this.listToFilter.filter(user =>{
        return `${user.firstName}${user.lastName}`.toLowerCase().includes(value?.toLowerCase() || '')
      })

      this.sortUsers()
    })

    this._chatService.usersListSubject.subscribe((usersList:any)=>{
      this.connectedUsers = usersList
      this.sortUsers()
    })

    this._chatService.receivedMessage.subscribe((message:Message)=>{


      if(!message.userID?.username){
        return
      }

      if(this.selectedUser === message.userID?.username){
        return
      }

      this.messageCounts[message.userID.username] = (this.messageCounts[message.userID.username] || 0) + 1
    })
  }

  getAvatar(user:User){
    let url = user.avatar
    let img = new Image()
    img.src = url
    url = img.complete ? url : "https://image.noelshack.com/fichiers/2015/49/1448914032-elrisitasgif.gif"
    return `url(${url})`
  }

  setChatTarget(user:User){
    let isFriend = this.checkFriend(user)
    if (!isFriend){
      return false;
    }
    this.selectedUser = user.username
    this._chatService.setChatTarget(user)
    this.messageCounts[user.username] = 0
    return true
  }

  getUsers(){
    //remove self
    this.filteredUsers = this.users.filter(user => {
      return user.firstName !== this.profile.firstName
    })
  }

  getFriends(){
    this._userService.getFriends().subscribe((val:any)=>{
      this.friends = val.body || []
    })
  }

  showFriends(){
    this._userService.getFriends().subscribe((val:any)=>{
      this.friends = val.body || []

      this.listToFilter = [...this.friends]
      this.filteredUsers = [...this.friends]
      this.sortUsers()
    })
  }

  showUsers(){
    this._userService.getUsersList().subscribe((val:any)=>{
      this.users = val.body

      //remove self
      this.users = this.users.filter(user => user.username !== this.profile.username)
      this.listToFilter = [...this.users]
      this.filteredUsers = [...this.users]

      this.sortUsers()
    })
  }

  addFriend(user:User){
    this._userService.addFriend(user.username).subscribe(response=>{
      if(response.status === 200){
        this.friends.push(user)
      }
    })
  }

  onRemoveFriend(user:User){
    this._userService.removeFriend(user.username).subscribe(response => {
      if(response.status === 200){
        this.friends = this.friends.filter(element => element.username !== user.username)
      }
    })
  }

  checkFriend(user:User){
    return this.friends?.find(element => element.username === user.username)
  }

  sortUsers(){
    this.filteredUsers.sort((a, b)=>{
      let condition = a.firstName.toLowerCase() < b.firstName.toLowerCase()
      return condition ? -1 : 1
    })
    this.filteredUsers = this.filteredUsers.sort((a, b)=>{
      let condition:boolean = this.connectedUsers.includes(a.username) && (!this.connectedUsers.includes(b.username))
      return condition ? -1 : 1
    })
  }

  getMessageCount(user:User){
    return this.messageCounts[user.username] > 99 ? "99+" : this.messageCounts[user.username]
  }

}
