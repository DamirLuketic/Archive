import { ArchivePage } from './app.po';

describe('archive App', () => {
  let page: ArchivePage;

  beforeEach(() => {
    page = new ArchivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
