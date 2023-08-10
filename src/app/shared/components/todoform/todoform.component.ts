import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  @Output() formdataoutput : EventEmitter <string> = new EventEmitter<string>()

@ViewChild("tododata") tododata !: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
 let formdata= this.tododata.nativeElement.value;
//  console.log(formdata)

   this.formdataoutput.emit(formdata);
   this.tododata.nativeElement.value = ''
  }


}
