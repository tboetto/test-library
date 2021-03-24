import { newSpecPage } from '@stencil/core/testing';
import { WebFieldset } from '../web-fieldset';

describe('web-fieldset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebFieldset],
      html: `<web-fieldset></web-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <web-fieldset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-fieldset>
    `);
  });
});
