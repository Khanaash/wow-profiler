import { ProjectTestPage } from './app.po';

describe('wow-profiler App', () => {
  let page: ProjectTestPage;

  beforeEach(() => {
    page = new ProjectTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
