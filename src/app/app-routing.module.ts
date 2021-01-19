
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSourcingComponent } from './components/product-sourcing/product-sourcing.component';
import { ResourcesComponent} from './components/resources/resources.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'productSourcing',
    component: ProductSourcingComponent
  },
  {
    path: '',
    redirectTo: '/resources',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
