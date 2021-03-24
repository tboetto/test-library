import { newSpecPage } from '@stencil/core/testing';
import { WebRadioInput } from '../web-radio-input';

describe('web-radio-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebRadioInput],
      html: `<web-radio-input></web-radio-input>`,
    });
    expect(page.root).toEqualHtml(`
      <web-radio-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-radio-input>
    `);
  });
});
