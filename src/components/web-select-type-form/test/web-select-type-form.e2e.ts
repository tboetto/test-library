import { newE2EPage } from '@stencil/core/testing';

describe('web-select-type-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-select-type-form></web-select-type-form>');

    const element = await page.find('web-select-type-form');
    expect(element).toHaveClass('hydrated');
  });
});
