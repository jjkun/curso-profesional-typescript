import { SignalsCardsComponent } from "./components/signals-cards/signals-cards.component";

class App{
    start(){
        console.log('>> Start()!')
       new SignalsCardsComponent({
           selector:'#signals-container'
        }).render();
       
    }
}

new App().start();