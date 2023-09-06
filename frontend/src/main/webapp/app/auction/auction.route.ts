import { Routes } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';


const auctionRoutes: Routes = [
  // { path: '', redirectTo: '/auction/live', pathMatch: 'full' },
  { path: 'live', component: LiveComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id', component: DetailComponent }
];

export default auctionRoutes;
