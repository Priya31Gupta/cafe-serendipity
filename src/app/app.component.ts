import { Component } from '@angular/core';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { FooterComponent } from './components/Footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cafe-serendipity';
}
