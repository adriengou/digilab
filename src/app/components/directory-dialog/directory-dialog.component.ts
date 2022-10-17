import {Component, OnInit} from '@angular/core';
import {DirectoryServiceService} from "../../services/directory-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Directory} from "../../models/directory.model";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-directory-dialog',
  templateUrl: './directory-dialog.component.html',
  styleUrls: ['./directory-dialog.component.scss']
})
export class DirectoryDialogComponent implements OnInit {
  directoryForm!: FormGroup

  constructor(private _directoryService: DirectoryServiceService, private _fb: FormBuilder, private _dialogRef: MatDialogRef<any>) {}

  ngOnInit(): void {
    this.directoryForm = this._fb.group({
      name: ['', Validators.required],
      path: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  onSubmit() {
    let {name, path, description} = this.directoryForm.getRawValue();
    let dir = new Directory(name, path, description)
    this._directoryService.createDirectory(dir).subscribe(response => {
      let {name, path, description} = response
      let dir = new Directory(name, path, description)
      this._directoryService.addDirectory(dir)
      this._dialogRef.close() //Close the modal and send back data
    })
  }

}


//modal directory
//
