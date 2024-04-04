import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  openDropdown = false;

  constructor(public router: Router ){}

  toggleDropdown():void {
    this.openDropdown = !this.openDropdown;
  }

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  toggleDropdown1():void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  

  closeMenu():void {
   this.isMenuOpen = false;
  }
  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}


