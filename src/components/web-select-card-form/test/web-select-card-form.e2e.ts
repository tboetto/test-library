import { newE2EPage } from '@stencil/core/testing';

describe('web-select-card-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-select-card-form></web-select-card-form>');

    const element = await page.find('web-select-card-form');
    expect(element).toHaveClass('hydrated');
  });
});
