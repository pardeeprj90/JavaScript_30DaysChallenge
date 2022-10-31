///<requires ='Cypress'/>
/*
Task 1 – Verify URL and title
    Open https://ineuron-courses.vercel.app/login
    Verify title contains Courses 
    Verify url contains login
*/
describe('Launch the Web Application', () => {
    it('Open the URL',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("title").should('contain','Courses')
        cy.url().should('contain','login')
    })
});

