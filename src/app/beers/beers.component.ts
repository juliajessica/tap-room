import { Component, OnInit, Input} from '@angular/core';
import { Beer } from './../models/tap-room.model';
import { EditBeerComponent } from './../edit-beer/edit-beer.component';
import { AddBeerComponent } from './../add-beer/add-beer.component';
@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  @Input() childBeerList: Beer[];

  constructor() { }

  ngOnInit() {
  }

}
