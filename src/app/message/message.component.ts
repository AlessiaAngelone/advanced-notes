import {Component, OnInit, Input, ViewChild, SimpleChanges, AfterViewInit} from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges) {
  }

  readMore() {
    console.log('read more');
    this.messageChild.nativeElement.classList.toggle('line-clamp');
  }

}
