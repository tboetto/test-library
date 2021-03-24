import { Component, Host, h } from '@stencil/core';
import { RadioProps } from '../web-radio-input/web-radio-input';
import { InputType } from '../web-fieldset/web-fieldset';

const legendText: string = 'Choose card type';
const inputType: InputType = 'radio';
const options: RadioProps[] = [
  {
    value: 'credit',
    checked: true,
    id: 'card-type-credit',
    disabled: false,
    slotLabel: false,
    label: 'credit',
    type: 'radio',
    name: 'card-type',
  },
  {
    value: 'debit',
    checked: true,
    id: 'card-type-debit',
    disabled: false,
    slotLabel: false,
    label: 'debit',
    type: 'radio',
    name: 'card-type',
  }
]

@Component({
  tag: 'web-select-type-form',
  styleUrl: 'web-select-type-form.css',
  shadow: true,
})
export class WebSelectTypeForm {

  render() {
    return (
      <Host>
        <form>
          <web-fieldset
            legendText={legendText}
            inputType={inputType}
            options={options}
            slotLabel={false}
          />
        </form>
      </Host>
    );
  }

}
