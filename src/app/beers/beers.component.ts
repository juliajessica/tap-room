import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BEERSTEMP } from '../mock-beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers = BEERSTEMP;
  // beers: Beer = {
  //   brandName1: 'Block 15',
  //
  // }
  selectedBeer: Beer;

  onSelect(beer: Beer): void{
    this.selectedBeer = beer;
  }
  constructor() { }

  ngOnInit() {
  }

}
