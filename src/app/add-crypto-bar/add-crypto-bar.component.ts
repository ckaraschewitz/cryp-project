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

cryptoValue : number = 0;


 onAddCrypto() {
  this.cryptoValue = 1;
}


  constructor() {

    
   }

  ngOnInit() {

    var calculateTotal = (Price: number, Amount: number) : number => {
      return Price * Amount; 
    }

      var Price : number = 42.851;
      var Amount : number = 30;
      console.log(Amount);
      this.cryptoValue = calculateTotal(Price, Amount);
      console.log(this.cryptoValue);

      console.log(this.crypto.id);



}

onInput($event) {
  $event.preventDefault();
  console.log('selected: ' + $event.target.value);
}

}