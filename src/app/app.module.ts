import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WidgetAdvancedNoteComponent} from './widget-advanced-note/widget-advanced-note.component';
import {EditNoteComponent} from './edit-note/edit-note.component';
import { MessageComponent } from './message/message.component';
import { NoteComponent } from './note/note.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WidgetAdvancedNoteComponent,
    EditNoteComponent,
    MessageComponent,
    NoteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
