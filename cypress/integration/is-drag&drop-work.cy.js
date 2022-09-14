// {project}/cypress/integration/cart/is-available.spec.js
describe("is constructor work", function () {
  const bunLength = 2,
    sauceLength = 4,
    mainLength = 9;

  before(function () {
    cy.visit("http://localhost:3000");
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
      cy.get(":nth-child(1) > .input__container > .input").type(
        `{selectAll}damask161092@gmail.com{enter}`
      );
      cy.get(":nth-child(2) > .input__container > .input").type(
        `{selectAll}123456{enter}`
      );
      cy.get('[href="/"] > .header-Items_boxItemsChild__p4XXl')
        .contains("Конструктор")
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
      cy.contains("идентификатор заказа");
      cy.contains("Ваш заказ начали готовить");
      cy.get(".modal_modalHeader__5HW85 > svg").click();

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
      cy.contains("идентификатор заказа");
      cy.contains("Ваш заказ начали готовить");
      cy.get(".modal_modalHeader__5HW85 > svg").click();
    });
    it("should be deleted after clicking on the delete button", function () {
      cy.get(
        "[data-test='constructorElement'] > .constructor-element > .constructor-element__row > .constructor-element__action > svg"
      ).each(function (el) {
        cy.wrap(el).click();
      });
      cy.contains("Выберите начинку");
    });
  });
});
