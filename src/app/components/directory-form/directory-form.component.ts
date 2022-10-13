import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DirectoryServiceService } from '../../services/directory-service.service';

@Component({
  selector: 'app-directory-form',
  templateUrl: './directory-form.component.html',
  styleUrls: ['./directory-form.component.scss'],
})
export class DirectoryFormComponent implements OnInit {
  public directoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private directoryService: DirectoryServiceService
  ) {
    this.directoryForm = this.fb.group({
      name: [''],
      path: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}
}
