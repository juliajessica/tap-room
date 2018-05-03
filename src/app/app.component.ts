import { Component, OnInit } from '@angular/core';
import { Beer } from './models/tap-room.model';
import { BeersComponent } from './beers/beers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  beers: Beer[] = [
    new Beer(1,'Block 15', 'Tropical Slam Sticky Hands', 'Hazy IPA', 'ABV: 8.1%', 5),
    new Beer(2,'Barley Browns', 'Pallet Jack', 'IPA', 'ABV: 7%', 5),
    new Beer(3,'Breakside', 'Lunch Break', 'Session IPA', 'ABV: 4.5%', 5),
    new Beer(4,'Modern Times', 'Fruitlands', 'Sour Tropical IPA', 'ABV: 6.5%', 6),
    new Beer(5, 'Wayfinder', 'Hell', 'Helles Lager', 'ABV: 5%', 5),
    new Beer(6,'Baerlic', 'Dad Beer', 'Pre-Prohibition Lager', 'ABV: 5.1%', 5),
    new Beer(7,'Silvermoon', 'IPA 97', 'IPA', 'ABV: 6.7%', 6),
    new Beer(8, 'pFriem', 'Black Saison', 'Black Saison', 'ABV: 6.1%', 7),
    new Beer(9,'Ecliptic', 'Capella', 'Porter', 'ABV: 5.7%', 7),
    new Beer(10,'Angry Orchard', 'Crisp Apple', 'Apple Cider', 'ABV: 5.8%', 6)
  ];

  // finishedAdding(){
  //   this.selectedBeer = null;
  // }

  selectedBeer = null;
  // selectedBeerToAdd = null;

  // addBeer(clickToAdd){
  //   alert("hi");
  //   this.selectedBeer = clickToAdd;
  // }

  editBeer(clickedBeer){
    // console.log(clickedBeer.brandName);
    this.selectedBeer = clickedBeer;
  }

  finishedEditing(){
    this.selectedBeer = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
