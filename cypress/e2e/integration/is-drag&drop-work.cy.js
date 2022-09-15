// {project}/cypress/integration/cart/is-available.spec.js

import {testUrl} from './url-for-test';

const waitDuration = 15000;

describe("is constructor work", function () {
  const bunLength = 2,
    sauceLength = 4,
    mainLength = 9;

  before(function () {
    cy.visit(testUrl);
  });
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1920, 1080);
    });
    function DragAndDrop(start, end) {
      cy.get(`${start}`).trigger("dragstart");
      cy.get(`${end}`).trigger("drop");
    }
    function randomInteger(max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = 0 - 0.5 + Math.random() * (max - 0);
      return Math.round(rand);
    }
    it("should have ingredients on page", function () {
      cy.get("[data-test='Булки']").should("have.length", bunLength);
      cy.get("[data-test='Соусы']").should("have.length", sauceLength);
      cy.get("[data-test='Начинки']").should("have.length", mainLength);
    });
    it("should login for make order", function () {
      cy.get("button").contains("Оформить заказ").click();
      cy.get("[data-test='email-input']").type(
        `{selectAll}damask161092@gmail.com{enter}`
      );
      cy.get("[data-test='password-input']").type(
        `{selectAll}123456{enter}`
      );
      cy.contains("Конструктор")
        .click();
    });
    it("should drag and drop and make order", function () {
      DragAndDrop(
        "[data-test-drag='Булки1']",
        "[data-test='drop-in-constructor']"
      );
      DragAndDrop(
        `[data-test-drag='Соусы${randomInteger(sauceLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      DragAndDrop(
        `[data-test-drag='Соусы${randomInteger(sauceLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      DragAndDrop(
        `[data-test-drag='Начинки${randomInteger(mainLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      DragAndDrop(
        `[data-test-drag='Начинки${randomInteger(mainLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      cy.get("button").contains("Оформить заказ").click(); 
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(waitDuration)
      cy.contains("Ваш заказ начали готовить");
      cy.get("[data-test='modal-Close']").click();

      DragAndDrop(
        "[data-test-drag='Булки0']",
        "[data-test='drop-in-constructor']"
      );
      DragAndDrop(
        `[data-test-drag='Соусы${randomInteger(sauceLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      DragAndDrop(
        `[data-test-drag='Соусы${randomInteger(sauceLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      DragAndDrop(
        `[data-test-drag='Начинки${randomInteger(mainLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      DragAndDrop(
        `[data-test-drag='Начинки${randomInteger(mainLength)}']`,
        `[data-test='drop-in-constructor']`
      );
      cy.get("button").contains("Оформить заказ").click();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(waitDuration)
      cy.contains("идентификатор заказа");
      cy.contains("Ваш заказ начали готовить");
      cy.get("[data-test='modal-Close']").click();
    });
     
  });
});
