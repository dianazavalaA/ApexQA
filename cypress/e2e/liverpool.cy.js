//Test suite
describe("should go to page ", () => {
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://www.liverpool.com.mx/tienda/home", {
            headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        });

      })

    //First Test
    it.only("Search Bar", ()=> {
        cy.get('#mainSearchbar').click()
        cy.get('#mainSearchbar').type("Vaporub");
        cy.get('.input-group-append > .input-group-text').click()
    }) 
   //Second Test
   it("Buying a Smart TV", ()=> {
        cy.get('#mainSearchbar').click()
        cy.get('#mainSearchbar').type("Smart TV");
        cy.get('.input-group-append > .input-group-text').click()
        cy.get('#brand-HISENSE').click()
   })   
   //Third test
   it("Create a consumer account", ()=> {

    cy.get('.order-lg-4 > .a-header__topLink').click()
    cy.get('.c6a2c9a1b > .c27335968').click()
    cy.get('#email').type("dzavalaa94@gmail.com")
    cy.get('#password').type("Hello123456")
    cy.get('.c0f698f21 > .c7303c95e').click()
    cy.get('.c27335968').click()
    cy.get('#username').type("dzavalaa94@gmail.com")
    cy.get('#password').type("Hello123456")
    cy.get('.c0f698f21 > .c7303c95e').click()
    cy.get('#input-user__name').type("Esther")
    cy.get('#input-user__apaterno').type("Espinosa")
    cy.get('.a-btn').click()
   })
   //Plus1 Test
   it("Link-Social Media", ()=>{

    cy.get('.icon-twitter').click()
   })

   
  
});