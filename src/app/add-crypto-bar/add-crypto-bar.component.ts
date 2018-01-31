import { Component, OnInit } from '@angular/core';
import { Crypto } from '../crypto-currency';


@Component({
  selector: 'app-add-crypto-bar',
  templateUrl: './add-crypto-bar.component.html',
  styleUrls: ['./add-crypto-bar.component.css']
})
export class AddCryptoBarComponent implements OnInit {
amount : number = 0;
crypto : Crypto = {
 id: 1,
 name: 'neo',
 amount: 0

}

  constructor() { }

  ngOnInit() {
    console.log(this.amount);

  
  }

}
