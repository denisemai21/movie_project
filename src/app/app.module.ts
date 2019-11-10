import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/searchcriteria.component';
import { MovielistComponent } from './movie/movielist.component';
import { WatchlistComponent } from './watch/watchlist.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
// import { GenresComponent } from './genres/genres.component';


import { SearchService } from './search/search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  { path: '', component: MovielistComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'movie/:id', component: MovieCardComponent },
  // { path: 'genres/:id/:name', component: GenresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovielistComponent,
    WatchlistComponent,
    MovieCardComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
