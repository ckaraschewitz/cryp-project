import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent {
  @Input() private cryptoList: Crypto[];
}
