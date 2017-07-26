import { CvAppPage } from './app.po';

describe('cv-app App', function() {
  let page: CvAppPage;

  beforeEach(() => {
    page = new CvAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
