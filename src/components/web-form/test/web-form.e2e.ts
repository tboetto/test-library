import { newE2EPage } from '@stencil/core/testing';

describe('web-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-form></web-form>');

    const element = await page.find('web-form');
    expect(element).toHaveClass('hydrated');
  });
});
