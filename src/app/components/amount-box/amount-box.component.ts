import { Component } from '@angular/core';
import { AmountDataModel } from 'src/app/model/AmountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent {

  constructor(private service: AccountsService){}

  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit: 0,
    totalAmount: 0,
  }

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData() {
    this.service.getAccount().subscribe(data => {
      this.accountDetails.amountValue = data.account.balance;
      this.accountDetails.limit = data.account.limit;
      this.accountDetails.totalAmount =  this.accountDetails.amountValue + this.accountDetails.limit;
    });
  }
}
