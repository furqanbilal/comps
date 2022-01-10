import {Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() event = new EventEmitter;


  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void{
    this.el.nativeElement.remove();
  }

  onClickClose(){
    this.event.emit();
  }

}
