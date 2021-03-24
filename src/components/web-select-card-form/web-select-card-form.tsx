import { Component, Host, h } from '@stencil/core';
import { RadioProps } from '../web-radio-input/web-radio-input';
import { InputType } from '../web-fieldset/web-fieldset';

const legendText: string = 'Select a payment method';
const inputType: InputType = 'radio'
const options: RadioProps[] = [
      {
        value: 'visa',
        checked: true,
        id: 'visa',
        disabled: false,
        slotLabel: true,
        type: 'radio',
        name: 'select-card',
        cardContents: {
          cardBrand: 'visa',
          cardNum: '1234',
          expDate: '10/2025',
          active: true,
          billingAddress: {
            firstName: 'Tony',
            lastName: 'Tiger',
            addressLine1: '123 Milwaukee Ave',
            addressLine2: 'APT 6',
            city: 'Chicago',
            state: 'IL'
          }
        }
      },
      {
        value: 'discover',
        checked: false,
        id: 'discover',
        disabled: false,
        slotLabel: true,
        type: 'radio',
        name: 'select-card',
        cardContents: {
          cardBrand: 'visa',
          cardNum: '1234',
          expDate: '10/2025',
          active: false,
          billingAddress: {
            firstName: 'Larry',
            lastName: 'Lion',
            addressLine1: '24234 Whipple Ave',
            addressLine2: 'UNIT 2',
            city: 'Chicago',
            state: 'IL'
          }
        }
      },
    ]

@Component({
  tag: 'web-select-card-form',
  styleUrl: 'web-select-card-form.css',
  shadow: true,
})
export class WebSelectCardForm {

  render() {
    return (
      <Host>
        <form>
          <web-fieldset
            legendText={legendText}
            inputType={inputType}
            options={options}
            slotLabel={true}
          />
        </form>
      </Host>
    );
  }

}
