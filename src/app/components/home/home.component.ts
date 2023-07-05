import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEM } from '../shared/constant';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
    constructor(
        private router: Router,
    ) {
    }
    menuItems = MENU_ITEM;
    reviewItem = [
        {
            img: '../../../assets/quotes-avatar-woman_1.webp',
            review: 'Café Serendipity is my go-to place for a cozy and relaxing atmosphere. The service is quick and friendly, and the snacks are always delicious. Highly recommend the croissants and cappuccino!'
        },
        {
            img: '../../../assets/quotes-avatar-woman-2.webp',
            review: 'Café Serendipity is my go-to place for a cozy and relaxing atmosphere. The service is quick and friendly, and the snacks are always delicious. Highly recommend the croissants and cappuccino!'
        },
        {
            img: '../../../assets/quotes-avatar-man.webp',
            review: 'Café Serendipity is my go-to place for a cozy and relaxing atmosphere. The service is quick and friendly, and the snacks are always delicious. Highly recommend the croissants and cappuccino!'
        },
    ]
}
