import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { FooterComponent } from './components/Footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuListComponent } from './components/Menu/menu-list/menu-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuListComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
