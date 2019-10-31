import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchListPageComponent } from './watch-list-page/watch-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieListComponent,
    WatchListPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
