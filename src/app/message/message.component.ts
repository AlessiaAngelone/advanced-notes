import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, AfterViewInit {
  @Input() message!: string;
  @Input() direction!: string;
  @ViewChild('messageChild') messageChild: any;
  showMoreButton = false;

  constructor() {
  }

  ngOnInit(): void {
    this.setShowMoreButton();
  }

  ngAfterViewInit(): void {
    this.setShowMoreButton();
  }

  /**
   * Add/remove a css class to manage the line-clamp
   */
  readMore(): void {
    this.messageChild.nativeElement.classList.toggle('line-clamp');
  }

  setShowMoreButton(): void {
    setTimeout(() => {
      try {
        this.showMoreButton =
          this.messageChild.nativeElement.scrollHeight >
          this.messageChild.nativeElement.clientHeight;
      } catch (err) {
      }
    }, 0);
  }
}
