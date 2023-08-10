import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
 @Input() customArray !:Array<string>
  constructor() { }

  ngOnInit(): void {
  }

}
