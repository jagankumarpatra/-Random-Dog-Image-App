import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  dogImageUrl:string|undefined;
  loading=false;
  constructor(private http:HttpClient){}
  getRandomDog(){
    this.loading=true;
    this.http.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(
      (response)=>{
        if(response && response.message){
          this.dogImageUrl=response.message;
        }
        else{
          console.error('Invalid API response');
        }
        this.loading = false;
      },
      (error)=>{
        console.error('Error fetching random dog:', error);
        this.loading = false;
      }
    );
  }
}
