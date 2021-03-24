import { newE2EPage } from '@stencil/core/testing';

describe('web-card-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-card-summary></web-card-summary>');

    const element = await page.find('web-card-summary');
    expect(element).toHaveClass('hydrated');
  });
});
