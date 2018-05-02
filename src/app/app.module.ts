import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    AddBeerComponent,
    EditBeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
