import { Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
    {path:"",component:MovieListComponent,children:[{path:"",component:SearchBarComponent}]
    },
    { path: 'movie-details/:id', component: MovieDetailComponent }
];
