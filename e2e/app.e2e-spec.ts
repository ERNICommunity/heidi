import { HeidiPage } from './app.po';

describe('heidi App', function() {
  let page: HeidiPage;

  beforeEach(() => {
    page = new HeidiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
