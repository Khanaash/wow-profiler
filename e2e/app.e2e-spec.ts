import { ProjectTestPage } from './app.po';

describe('project-test App', () => {
  let page: ProjectTestPage;

  beforeEach(() => {
    page = new ProjectTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
