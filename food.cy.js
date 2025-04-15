describe('Food.com', () => {
  it('food', () => {
    cy.visit('https://www.food.com/?ref=nav'); 
    cy.scrollTo('bottom', { duration: 10000 }); // smooth scroll
    cy.scrollTo('top', { duration: 10000 });
    cy.get('.menu-icon').click()
    cy.get('.nav-list > :nth-child(1)').click()
    cy.get('.open > .dropdown > :nth-child(5)').click()
    cy.wait(500);
    cy.scrollTo('bottom', { duration: 10000 }); // smooth scroll
    cy.wait(2000)
    cy.scrollTo('top', { duration: 10000 });
    cy.get('.links-container').click()
    cy.get('.button--search').click()
    cy.wait(2000); 
    cy.get('#search-input').type('BANANA');
    cy.get('.icon-gk-search').click()
    cy.scrollTo('bottom', { duration: 1000 });
    cy.wait(2000)
    cy.get('[data-id="recipe-2886"] > .fd-inner-tile > .tile-content > .details > .title > a').click()
    cy.get('[href="/recipe/banana-banana-bread-25885?nav=recipe"] > .mobile-button').click()
    cy.scrollTo('bottom', { duration: 10000 }); // smooth scroll
    cy.get('.top-and-social__top').click() // Back to top

   
   
  


    


//     cy.scrollTo('bottom'); // scroll down first
// cy.wait(1000);         // wait for any lazy-loaded content
// cy.scrollTo('top');  
  
    });
});