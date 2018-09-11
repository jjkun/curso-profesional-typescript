import {OnInitComponent } from "./on-init-component";

export class LoginComponent implements OnInitComponent {
    onInit():void{
        console.log('>> LoginComponent > onInit');
    }
}