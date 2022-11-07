import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {User} from "../../models/user.model";
import {FormControl} from "@angular/forms";
import {MessageService} from "../../services/message.service";
import {ENTER} from "@angular/cdk/keycodes";
import * as events from "events";
import {Message} from "../../models/message.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('scrollMe') private _scrollContainer!: ElementRef
  target!:User
  messages:Message[] = []
  messageInput = new FormControl('')
  constructor(private _chatService:ChatService,
              private _messageService:MessageService,
              private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this._chatService.getChatTarget().subscribe((value:User) => {
      this.target = value
      this.getMessageFromFriend(this.target)
      this.scrollToBottom();
    })

    this._chatService.loginSuccess.subscribe(()=>{
      console.log('logged to socket io')
    })

    this._chatService.receivedMessage.subscribe((message:any)=>{
      console.warn(message)
      if (message.userID?.username !== this.target?.username){
        console.warn("messsage from someone else")
        this._snackBar.open(
          `${message.userID?.username} sent you: ${message.content}`,
          'ok',
          {
            panelClass:"snackbar-valid",
            duration: 1000,
          })
        this.playAudio("discord_notification.mp3")
        return
      }

      // let message = {
      //   from: data.from,
      //   to: "self",
      //   content: data.content,
      //   received:true,
      //   date: new Date()
      // }
      message.date = new Date(message.date)
      this.messages.push(message)
      this.scrollToBottom();
    })

    this._chatService.sentMessage.subscribe((message:Message)=>{
      // data.received = false
      // let message = {
      //   from: "self",
      //   to: data.friendName,
      //   content: data.content,
      //   received:false,
      //   date: new Date()
      // }
      // message.date = new Date(message.date)
      this.messages.push(message)
      this.scrollToBottom();
    })
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getAvatar(user:User):string{
    return user?.avatar ? `url(${user.avatar})` : 'url()'
  }

  sendMessage(){
    let message = this.messageInput?.value || ""
    if (!this.target){
      return
    }

    this._chatService.sendFriendMessage(this.target.username, message)
    this.messageInput.setValue('')
  }


  onKeyPress(event:KeyboardEvent){
    if (event.code === "Enter"){
      this.sendMessage()
    }
  }

  scrollToBottom(){
    try {
      this._scrollContainer.nativeElement.scrollTop = this._scrollContainer.nativeElement.scrollHeight
    }catch (err){}
  }

  getFormattedDate(dateString:string|undefined):string{

    if (!dateString){
      return ''
    }

    let date = new Date(dateString)

    let today = new Date()
    let year= date.getFullYear()
    let month = date.getMonth()
    let day:number|string = date.getDate()

    if (day === today.getDate()){
      day = ''
    }else{
      day = day < 10 ? `0${day}` : day
      day = `${day}/${month}/${year} -`
    }

    let hour:number|string = date.getHours()
    hour = hour < 10 ? `0${hour}` : hour

    let minutes:number|string = date.getMinutes()
    minutes = minutes < 10 ? `0${minutes}` : minutes

    return `${day} ${hour}:${minutes}`
  }

  getMessageFromFriend(friend:User){
    this.messages = []
    this._messageService.getMessages(friend.username).subscribe((response:Message[])=>{
      this.messages = response
    })
  }

  playAudio(name:string){
    console.log("Playing Sound");
    let audio = new Audio(`assets/${name}`);
    //Can externalize the variables
    audio.play().then(()=>console.log("song played"))
  }
}
