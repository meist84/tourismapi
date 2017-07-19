import { WorkspacePage } from './app.po';

describe('workspace App', () => {
  let page: WorkspacePage;

  beforeEach(() => {
    page = new WorkspacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
