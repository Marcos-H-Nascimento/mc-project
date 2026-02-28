import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router: Router, public auth: AuthService) { }

  goHome() {
    this.router.navigate(['/home']);
  }

  goLogin() {
    this.router.navigate(['/login'])
  }

  // Products
  menuProductsOpen: boolean = false
  // MenuSolutionsOpen
  menuSolutionsOpen: boolean = false;
  // MenuResourcesOpen
  menuResourcesOpen: boolean = false;

  toggleProducts(){
    this.menuProductsOpen = !this.menuProductsOpen;
    this.menuSolutionsOpen = false;
    this.menuResourcesOpen = false;
  }

  toggleSolutions() {
    this.menuSolutionsOpen = !this.menuSolutionsOpen;
    this.menuResourcesOpen = false
    this.menuProductsOpen = false
  }

  toggleResources() {
    this.menuResourcesOpen = !this.menuResourcesOpen;
    this.menuSolutionsOpen = false
    this.menuProductsOpen = false
  }

  closeMenus(){
    this.menuResourcesOpen = false;
    this.menuSolutionsOpen = false;
    this.menuProductsOpen = false;
  }

  get username(): string {
    return this.username;
  }
}
