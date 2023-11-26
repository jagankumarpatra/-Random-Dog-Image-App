import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  public name="Vishwas"
  title = 'Hello World';
  public myId="testId";
  public isdisabled=false;
  public styler="jagan";
  public hasError=false;
  public isSpecial=true;
  public highlightColor="green";
  public greeting="";
  onClick(){
    alert("hi");
    this.greeting="hi"; 
  }
  logmsg(value: string): void {
  console.log(value);
  alert(value);
  }
  public namee="";
  displayName=false;
  public color="rd";

  public colors=["red","blue","green","yellow"];

  public Name="jagaN";
}
