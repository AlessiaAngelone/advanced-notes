import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  noteForm!: FormGroup;
  @Output() onSubmitHandler  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Init Reactive forms to build noteForm and provide validation
   */
  initForm() {
    this.noteForm = new FormGroup({
      author : new FormControl("You"),
      createdAt : new FormControl(),
      imgString : new FormControl("avatar-lady"),
      msg : new FormControl('', Validators.required)
    })
  }

  /**
   * Emits to parent component an event containing the new note
   */
  onSubmit() {
    this.noteForm.controls.createdAt.setValue(new Date().getTime());
    this.onSubmitHandler.emit(this.noteForm.value);
    this.noteForm.controls.msg.setValue("");
  }
}
