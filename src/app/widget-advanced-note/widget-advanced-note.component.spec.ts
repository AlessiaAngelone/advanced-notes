import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAdvancedNoteComponent } from './widget-advanced-note.component';

describe('WidgetAdvancedNoteComponent', () => {
  let component: WidgetAdvancedNoteComponent;
  let fixture: ComponentFixture<WidgetAdvancedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAdvancedNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAdvancedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
