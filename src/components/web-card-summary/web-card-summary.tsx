import { Component, Host, getAssetPath, Prop, h } from '@stencil/core';

export type Brand = 'visa' | 'discover';

export interface address {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
}

export interface WebCard {
  cardBrand: Brand;
  cardNum: string;
  expDate: string;
  active: boolean;
  billingAddress?: address;
}

@Component({
  tag: 'web-card-summary',
  styleUrl: 'web-card-summary.css',
  shadow: true,
  assetsDirs: ['assets'],
})

export class WebCardSummary {
  @Prop() readonly cardSummary!: WebCard;

  render() {
    return (
      <Host>
        <div class="card-num">
          <img src={getAssetPath(`./assets/${this.cardSummary.cardBrand}.svg`)}/>
          <p>•••• •••• •••• {this.cardSummary.cardNum}</p>
        </div>
        <p>Expires <time>{this.cardSummary.expDate}</time></p>
        {this.cardSummary.active &&
        <div>
          <strong>Billing Address</strong>
          <p>{this.cardSummary.billingAddress?.firstName} {this.cardSummary.billingAddress?.lastName}</p>
          <p>{this.cardSummary.billingAddress?.addressLine1}</p>
          {this.cardSummary.billingAddress?.addressLine2 && <p>{this.cardSummary.billingAddress?.addressLine2}</p>}
          <p>{this.cardSummary.billingAddress?.city}, {this.cardSummary.billingAddress?.state}</p>
        </div>
        }
      </Host>
    );
  }

}
