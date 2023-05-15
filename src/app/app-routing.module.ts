import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent }
  , { path: 'dashboard', component: DashboardComponent }
  , { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  , { path: 'detail/:id', component: ArtistDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
