import { Component, OnInit } from '@angular/core';
import {Directory} from "../models/directory.model";
import {DirectoryServiceService} from "../services/directory-service.service";
import {DirectoryDialogComponent} from "./directory-dialog/directory-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.scss']
})
export class DirectoriesComponent implements OnInit {

  private _directories:Directory[] = []


  constructor(private directoryService:DirectoryServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.directoryService.dirSubject.subscribe((data:any)=>{
      switch (data.action) {
        case "create":
          this.directories.unshift(data.dir)
          break
        default:
          break
      }
    })
  }

  /**
   *
   * @param {string} enterAnimationDuration
   * @param {string} exitAnimationDuration
   */
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    const dialogRef = this.dialog.open(DirectoryDialogComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    // //This get the data sent back from dialog when closing
    // dialogRef.afterClosed().subscribe(responseFromModal=>{
    //   let {name, path, description} = responseFromModal
    //   this.directories.unshift(new Directory(name, path, description))
    // })
  }

  get directories(): Directory[] {
    return this._directories;
  }

  set directories(value: Directory[]) {
    this._directories = value;
  }

  testDirectories(){
    for (let i = 0; i < 20; i++) {
      let id = i
      let name = `directory #${i}`
      let path = `/`
      let description = `This is the ${i}th directory`
      this.directories.push(new Directory(name, path, description, id))
    }
  }

}
/*
Pour le component Weather, il faut faire comme le component Directory: ouvrir une modale qui contient un formulaire
 */
