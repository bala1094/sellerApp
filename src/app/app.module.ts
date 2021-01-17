
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatTabsModule,
  MatPaginatorModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductSourcingComponent } from './components/product-sourcing/product-sourcing.component';
import { MenuComponent } from './components/menu/menu.component';

import { AppStateManagerService } from './services/app-state-manager.service';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResourceFilterPipe } from './pipes/resource-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductSourcingComponent,
    MenuComponent,
    ResourcesComponent,
    ResourceFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [AppStateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
