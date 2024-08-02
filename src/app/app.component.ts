import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blogs';
  shouldShowOutlet = true; // Change this condition as needed

  ngOnInit(): void {
   }
}
