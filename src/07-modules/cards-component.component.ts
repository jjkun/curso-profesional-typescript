import {OnInitComponent } from "./on-init-component";

export class CardsComponent implements OnInitComponent {
    onInit():void{
        console.log('>> CardsComponent > onInit');
    }
}