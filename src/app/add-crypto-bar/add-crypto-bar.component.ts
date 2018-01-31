import { Component, OnInit } from '@angular/core';
import { Crypto } from '../crypto-currency';
import { CRYPTOS } from '../mock-cryptos';


@Component({
  selector: 'app-add-crypto-bar',
  templateUrl: './add-crypto-bar.component.html',
  styleUrls: ['./add-crypto-bar.component.css']
})
export class AddCryptoBarComponent implements OnInit {
crypto : Crypto = {
 id: 1,
 name: 'neo',
 amount: 0
}
cryptos = CRYPTOS;


  constructor() { }

  ngOnInit() {

  
  }

}
