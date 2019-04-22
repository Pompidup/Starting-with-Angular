import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Solution for 01 - Angular - Les Composants';
  Your_name = 'Julien';
  quest2 = 'Solution for 02 - Angular - Le binding';
  quest3 = 'Solution for 03 - Angular - Les Directives';
  quest4 = 'Solution for 04 - Angular - Le Routeur';
  displayMovieList:boolean = false;
  btFilm:any = 'Afficher la liste de films';

 toggle() {
  this.displayMovieList = !this.displayMovieList;

// CHANGE THE NAME OF THE BUTTON.
      if(this.displayMovieList)
        this.btFilm = "Masquer la liste";
      else
        this.btFilm = "Afficher la liste";
    }
}

