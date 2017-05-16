import { StockPage } from './app.po';

describe('stock App', () => {
  let page: StockPage;

  beforeEach(() => {
    page = new StockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
