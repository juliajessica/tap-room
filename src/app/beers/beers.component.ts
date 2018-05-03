import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Beer } from './../models/tap-room.model';
// import { EditBeerComponent } from './../edit-beer/edit-beer.component';
// import { AddBeerComponent } from './../add-beer/add-beer.component';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  @Output() clickAdd = new EventEmitter();

  editButtonClicked(beerToEdit: Beer) {
    // console.log(beerToEdit.brandName);
    this.clickSender.emit(beerToEdit);
  }

  // addButtonClicked(beerToAdd: Beer) {
  //   // console.log(beerToEdit.brandName);
  //   this.clickAdd.emit(beerToAdd);
  // }

  constructor() { }

  ngOnInit() {
  }

}
