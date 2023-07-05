import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { FooterComponent } from './components/Footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuListComponent } from './components/Menu/menu-list/menu-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuListComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
