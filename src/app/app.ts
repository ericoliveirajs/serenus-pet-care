import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  title = 'serenus-pet-care';
}