import { HarshasKitchenPage } from './app.po';

describe('harshas-kitchen App', () => {
  let page: HarshasKitchenPage;

  beforeEach(() => {
    page = new HarshasKitchenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
