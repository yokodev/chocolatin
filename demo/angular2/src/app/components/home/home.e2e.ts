// You need OpenJDK 7 Headless to run E2E tests with Protractor

describe('App', () => {
  beforeEach(() => {
    browser.get('/#/');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    const result = 'Chocolatin - Test';

    expect(subject).toEqual(result);
  });
});
