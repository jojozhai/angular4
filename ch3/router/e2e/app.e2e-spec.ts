import { Auction4Page } from './app.po';

describe('auction4 App', () => {
  let page: Auction4Page;

  beforeEach(() => {
    page = new Auction4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
