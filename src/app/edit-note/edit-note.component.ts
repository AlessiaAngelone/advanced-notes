import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initForm();

  }

  noteForm!: FormGroup;
  @Output() onSubmitHandler  = new EventEmitter();

  initForm() {
    this.noteForm = new FormGroup({
      author : new FormControl("You"),
      createdAt : new FormControl(),
      imgString : new FormControl("avatar-lady"),
      msg : new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.noteForm.controls.createdAt.setValue(new Date().getTime());
    this.onSubmitHandler.emit(this.noteForm.value);
    this.noteForm.controls.msg.setValue("");
  }

}
