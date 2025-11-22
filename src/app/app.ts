import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HugeNav} from './components/huge-nav/huge-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HugeNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MegaMenuTest');
}
