
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {StarRatingModule} from 'angular-star-rating';

import {
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSelectModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductSourcingComponent } from './components/product-sourcing/product-sourcing.component';
import { MenuComponent } from './components/menu/menu.component';

import { AppStateManagerService } from './services/app-state-manager.service';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResourceFilterPipe } from './pipes/resource-filter.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { CountryFilterPipe } from './pipes/country-filter.pipe';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { MinOrderQuantityPipe } from './pipes/min-order-quantity.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSourcingComponent,
    MenuComponent,
    ResourcesComponent,
    ResourceFilterPipe,
    ProductFilterPipe,
    CountryFilterPipe,
    SortByPricePipe,
    MinOrderQuantityPipe,
    PriceFilterPipe,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RatingModule,
    StarRatingModule.forRoot(),
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    NgbModule.forRoot()
  ],
  providers: [AppStateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
