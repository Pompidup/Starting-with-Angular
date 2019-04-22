import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { HightLightDirectiveDirective } from './hight-light-directive.directive';
import { CommandeComponent } from './commande/commande.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserProfileComponent,
    MenuComponent,
    HightLightDirectiveDirective,
    CommandeComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
