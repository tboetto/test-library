import { newE2EPage } from '@stencil/core/testing';

describe('web-fieldset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-fieldset></web-fieldset>');

    const element = await page.find('web-fieldset');
    expect(element).toHaveClass('hydrated');
  });
});
