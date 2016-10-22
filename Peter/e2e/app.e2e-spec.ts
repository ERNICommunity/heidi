import { HeidiAssistantPage } from './app.po';

describe('heidi-assistant App', function() {
  let page: HeidiAssistantPage;

  beforeEach(() => {
    page = new HeidiAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
