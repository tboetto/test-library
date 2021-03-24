import { Component, Host, Prop, h } from '@stencil/core';
import { WebCard } from '../web-card-summary/web-card-summary';

export interface RadioProps {
  value: string;
  checked: boolean;
  id: string;
  disabled: boolean;
  type: string;
  name: string;
  label?: string;
  slotLabel: boolean;
  cardContents?: WebCard
}

@Component({
  tag: 'web-radio-input',
  styleUrl: 'web-radio-input.css',
  shadow: false,
})
export class WebRadioInput {
  @Prop() readonly webRadioProps!: RadioProps

  render() {
    return (
      <Host>
        { !this.webRadioProps.slotLabel ?
          <div class="radio-input">
            <input
              type={this.webRadioProps.type}
              name={this.webRadioProps.name}
              value={this.webRadioProps.value}
              checked={this.webRadioProps.checked}
              disabled={this.webRadioProps.disabled}
              id={this.webRadioProps.id}
            />
          { this.webRadioProps.label !== undefined &&
            <label
              id={`${this.webRadioProps.id}-label`}
              htmlFor={this.webRadioProps.id}
            >
              {this.webRadioProps.label}
            </label>
          }
          </div>
          :
          <div class="radio-input">
            <input
              type={this.webRadioProps.type}
              name={this.webRadioProps.name}
              value={this.webRadioProps.value}
              checked={this.webRadioProps.checked}
              disabled={this.webRadioProps.disabled}
              id={this.webRadioProps.id}
            />
            {
              this.webRadioProps.cardContents &&
                <web-card-summary cardSummary={this.webRadioProps.cardContents}/>
            }
          </div>
        }
      </Host>
    );
  }

}
