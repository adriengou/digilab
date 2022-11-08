import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  public status!:string

  constructor(public dialogRef:MatDialogRef<RegisterDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.status = data.response ?  "User Registered" : "Problem"
  }

  ngOnInit(): void {
  }

}
