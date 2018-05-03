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
    new Beer(1,'Block 15', 'Tropical Slam Sticky Hands', 'Hazy IPA', 'ABV: 8.1%', 5, 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b55ee05a2351e8dac946d5f93a22eb8b&auto=format&fit=crop&w=1350&q=80')
    // new Beer(2,'Barley Browns', 'Pallet Jack', 'IPA', 'ABV: 7%', 5, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(3,'Breakside', 'Lunch Break', 'Session IPA', 'ABV: 4.5%', 5, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(4,'Modern Times', 'Fruitlands', 'Sour Tropical IPA', 'ABV: 6.5%', 6, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(5, 'Wayfinder', 'Hell', 'Helles Lager', 'ABV: 5%', 5, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(6,'Baerlic', 'Dad Beer', 'Pre-Prohibition Lager', 'ABV: 5.1%', 5, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(7,'Silvermoon', 'IPA 97', 'IPA', 'ABV: 6.7%', 6, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(8, 'pFriem', 'Black Saison', 'Black Saison', 'ABV: 6.1%', 7, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(9,'Ecliptic', 'Capella', 'Porter', 'ABV: 5.7%', 7, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html'),
    // new Beer(10,'Angry Orchard', 'Crisp Apple', 'Apple Cider', 'ABV: 5.8%', 6, 'http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/beer-icon.html')
  ];

  // finishedAdding(){
  //   this.selectedBeer = null;
  // }

  selectedBeer = null;
  // selectedBeerToAdd = null;

  addBeer(newBeer: Beer) {
    this.beers.push(newBeer);
  }

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
