import { Component, Host, Prop, h } from '@stencil/core';
import { RadioProps } from '../web-radio-input/web-radio-input';

export type InputType = 'radio' | 'checkbox';

@Component({
  tag: 'web-fieldset',
  styleUrl: 'web-fieldset.css',
  shadow: false,
})
export class WebFieldset {
  @Prop() readonly legendText!: string;
  @Prop() readonly inputType!: InputType;
  @Prop() readonly options!: RadioProps[];
  @Prop() readonly slotLabel!: boolean;

  render() {

    return (
      <Host>
        <fieldset>
        {this.inputType === 'checkbox' ? (
            this.options.map(opt => (
              <div>
                <input
                  id={opt.id}
                  type={this.inputType}
                  checked={opt.checked}
                  disabled={opt.disabled}
                  name={opt.name}
                  value={opt.value}
                />
                <label
                  id={`${opt.id}-label`}
                  htmlFor={opt.id}
                >
                  {opt.label}
                </label>
              </div>
            ))
          ) : (
            this.options.map(opt => (
              <web-radio-input webRadioProps={opt}/>
            ))
          )
        }
        </fieldset>
      </Host>
    );
  }

}
