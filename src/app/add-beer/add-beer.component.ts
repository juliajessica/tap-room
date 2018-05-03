import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Beer } from './../models/tap-room.model';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {
  @Input() childSelectedBeer: Beer;
  @Output() clickedAdd = new EventEmitter();

  submitForm(tapNumber: number, breweryName: string, beerName: string, beerStyle: string, abv: string, beerPrice: number, url: string) {
   let addBeer: Beer = new Beer(tapNumber, breweryName, beerName, beerStyle, abv, beerPrice, url);
   this.clickedAdd.emit(addBeer);
  }

  // finishedAdding(){
  //   this.clickedAdd.emit();
  // }
  constructor() { }

  ngOnInit() {
  }

}
