import { Component, OnInit } from '@angular/core';
import { IPrice, PRICE } from '../model/price';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  price: IPrice[] = PRICE;
  displayedColumns: string[] = ['city', 'price'];

  constructor() { }

  ngOnInit(): void {
  }

}
