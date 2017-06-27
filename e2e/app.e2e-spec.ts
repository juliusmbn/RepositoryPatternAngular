import { AngularExperimentsPage } from './app.po';

describe('angular-experiments App', () => {
  let page: AngularExperimentsPage;

  beforeEach(() => {
    page = new AngularExperimentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
