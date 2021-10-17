import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements AfterViewInit {
  @Input() message!: string;
  @Input() direction!: string;
  @ViewChild("messageChild") messageChild: any;
  showMoreButton: boolean = false;

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.showMoreButton = this.messageChild.nativeElement.scrollHeight > this.messageChild.nativeElement.clientHeight

    })
  }

  /**
   * Add/remove a css class to manage the line-clamp
   */
  readMore() {
    this.messageChild.nativeElement.classList.toggle('line-clamp');
  }

}
