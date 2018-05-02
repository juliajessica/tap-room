import { Component, Input, OnInit} from '@angular/core';
import { Beer } from './../models/tap-room.model';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {
  @Input() childSelectedBeer: Beer;

  constructor() { }

  ngOnInit() {
  }

  finishedEditing(){
    alert('hi');
    this.childSelectedBeer = null;
  }
}
