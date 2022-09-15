// {project}/cypress/integration/cart/is-available.spec.js
import {testUrl} from './url-for-test';

describe("service is available", function () {
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1920, 1080);
    });
    it("should be available on localhost:3000", function () {
      cy.visit(testUrl);
    });
    it("should open constructor page by default", () => {
      cy.contains("Выберите булку");
      cy.contains("Выберите начинку");
      cy.contains("Оформить заказ");

      cy.contains("Собери бургер");
      cy.contains("Конструктор");
      cy.contains("Соусы");
      cy.contains("Булки");
      cy.contains("Начинки");
    });
    it("should open authorization page with out login", function () {
      cy.get("button").contains("Оформить заказ").click();
      cy.contains("Вход");
      cy.contains("Войти");
      cy.get("a").contains("Конструктор").click();
    });
  });
});
