import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  listArray:Array<string>=["html","css","js"]
  constructor() { }

  ngOnInit(): void {
  }

}
