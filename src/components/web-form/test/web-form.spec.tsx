import { newSpecPage } from '@stencil/core/testing';
import { WebForm } from '../web-form';

describe('web-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebForm],
      html: `<web-form></web-form>`,
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
