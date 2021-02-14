import { locatorStrategy } from "query-selector-shadow-dom/plugins/webdriverio";

describe("Chrome downloads", () => {
  before(() => {
    browser.addLocatorStrategy("shadow", locatorStrategy);
  });

  it("shadow dom element can be located", () => {
    browser.url("chrome://downloads/");
    const moreAction = browser.custom$("shadow", "#moreActions");
    moreAction.click();
    const span = browser.custom$("shadow", ".dropdown-item:not([hidden])");
    const text = span.getText();
    // prints `Open downloads folder`
    console.log("found:", text);

    //browser.deleteSession();
  });
});