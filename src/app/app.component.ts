import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArrayList:Array<string>=[]
  title = 'todo';



 
  formInput(formdata:string){
    // console.log(formdata)
    localStorage.setItem("key", JSON.stringify(formdata))
    this.todoArrayList.push(formdata);

 

  }

}
