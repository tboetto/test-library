import { newSpecPage } from '@stencil/core/testing';
import { WebSelectCardForm } from '../web-select-card-form';

describe('web-select-card-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebSelectCardForm],
      html: `<web-select-card-form></web-select-card-form>`,
    });
    expect(page.root).toEqualHtml(`
      <web-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-form>
    `);
  });
});
