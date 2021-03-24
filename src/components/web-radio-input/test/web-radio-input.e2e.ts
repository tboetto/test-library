import { newE2EPage } from '@stencil/core/testing';

describe('web-radio-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-radio-input></web-radio-input>');

    const element = await page.find('web-radio-input');
    expect(element).toHaveClass('hydrated');
  });
});
