
import {LoginComponent} from './login-component.component';
import {CardsComponent} from './cards-component.component';
import {ComponentManager} from './components-manager';

class App{
    start(){
        let manager = new ComponentManager();
        manager.addComponent(new LoginComponent());
        manager.addComponent(new CardsComponent());
        manager.render();
    }
}

new App().start();