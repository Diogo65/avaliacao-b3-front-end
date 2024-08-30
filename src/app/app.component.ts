import { Component } from '@angular/core';
import { FooterComponent } from './pages/navegacao/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './pages/navegacao/menu/menu.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [MenuComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'TesteB3';
}
