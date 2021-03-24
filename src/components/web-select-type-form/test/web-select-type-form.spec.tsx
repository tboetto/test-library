import { newSpecPage } from '@stencil/core/testing';
import { WebSelectTypeForm } from '../web-select-type-form';

describe('web-select-type-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebSelectTypeForm],
      html: `<web-select-type-form></web-select-type-form>`,
    });
    expect(page.root).toEqualHtml(`
      <web-select-type-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-select-type-form>
    `);
  });
});
