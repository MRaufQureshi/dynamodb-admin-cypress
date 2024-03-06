// <reference types="cypress" />
declare namespace Cypress {

  type LoginOptions = {
    rememberUser: boolean;
  };

  interface Chainable {
    /**
     * Custom command to get the iFrame element
     */
    getIframe(): Chainable<JQuery<HTMLElement>>;
  }
}
