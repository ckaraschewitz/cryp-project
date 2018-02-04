import { Component } from '@angular/core';

import { Crypto } from "./crypto-currency";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  private cryptos: Crypto[] = [];

  public onCryptoAdded(crypto: Crypto) {
    this.cryptos.push(crypto);
  }

  /*
    var calculateTotal = (Price: number, Amount: number): number => {
      return Price * Amount;
    }

    var Price: number = 42.851;
    var Amount: number = 30;
    this.cryptoValue = calculateTotal(Price, Amount);
  */
}
