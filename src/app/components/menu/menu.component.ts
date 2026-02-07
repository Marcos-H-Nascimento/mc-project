import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor( private router: Router) {}

  goHome(){
    this.router.navigate(['/home']);    
  }  

  goLogin(){
    this.router.navigate(['/login'])
  }

  // Settings

  settingsOpen = false;

  toggleSetting(){
    this.settingsOpen = !this.settingsOpen
  }
}
