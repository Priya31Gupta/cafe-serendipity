import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'Navbar',
    templateUrl: './Navbar.component.html',
    styleUrls: ['./Navbar.component.scss'],
})

export class NavbarComponent {
    drawerWidth = 240;
    navItems = ['Home', 'About', 'Contact'];
    constructor(
        private router: Router,
    ) {
    }
    menuOption: boolean = false;

    toggleMenu(){
        this.menuOption = !this.menuOption;
    }
}
