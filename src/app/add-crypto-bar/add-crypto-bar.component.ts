import { Component, Output, EventEmitter } from '@angular/core';

import { Crypto } from '../crypto-currency';
import { CRYPTOS } from '../mock-cryptos';

@Component({
  selector: 'app-add-crypto-bar',
  templateUrl: './add-crypto-bar.component.html',
  styleUrls: ['./add-crypto-bar.component.css']
})

export class AddCryptoBarComponent {
  @Output() onCryptoAdded = new EventEmitter<Crypto>();

  private cryptos: Crypto[] = CRYPTOS;

  private cryptoId: number = CRYPTOS[0].id;
  private cryptoAmount: number = 0;

  public onAddCryptoClick() {
    const newCrypto: Crypto = {
      id: this.cryptoId,
      name: this.getCryptoNameForId(this.cryptoId),
      amount: this.cryptoAmount
    };

    this.onCryptoAdded.emit(newCrypto);
  }

  private getCryptoNameForId(cryptoId: number) {
    return this.cryptos.find(
      crypto => crypto.id === cryptoId
    ).name;
  }
}
