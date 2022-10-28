import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _usersData!: any;

  constructor(/*userService:UserService*/) {
    // userService.getRandomUsers(1).subscribe((data:any) => {
    //   this.usersData = data.data
    //   console.log(this.usersData);
    // })
  }

  ngOnInit(): void {
  }

  public get usersData(): any {
    return this._usersData;
  }

  public set usersData(value: string) {
    this._usersData = value;
  }
}
