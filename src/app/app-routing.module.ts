import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommandeComponent } from './commande/commande.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'search-movie', component: SearchMovieComponent},
  { path: 'commande', component: CommandeComponent},
  { path: '', redirectTo: 'search-movie', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
