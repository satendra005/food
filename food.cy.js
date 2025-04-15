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
    cy.scrollTo('top', { duration: 10000 });
    


//     cy.scrollTo('bottom'); // scroll down first
// cy.wait(1000);         // wait for any lazy-loaded content
// cy.scrollTo('top');  
  
    })
})