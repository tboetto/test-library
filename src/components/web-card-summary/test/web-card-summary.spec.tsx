import { newSpecPage } from '@stencil/core/testing';
import { WebCardSummary } from '../web-card-summary';

describe('web-card-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebCardSummary],
      html: `<web-card-summary></web-card-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <web-card-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-card-summary>
    `);
  });
});
