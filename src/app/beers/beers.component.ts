import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers: Beer[] = [
    new Beer('Block 15'),
    new Beer('Barley Browns'),
    new Beer('Breakside'),
    new Beer('Modern Times'),
    new Beer('Wayfinder'),
    new Beer('Baerlic'),
    new Beer('Silvermoon'),
    new Beer('Pfriem'),
    new Beer('Ecliptic'),
    new Beer('Angry Orchard')
  ];

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

  editBeer(clickedBeer){
  this.selectedBeer = clickedBeer;
  }

  selectedBeer = null;

  constructor() { }

  ngOnInit() {
  }

}
