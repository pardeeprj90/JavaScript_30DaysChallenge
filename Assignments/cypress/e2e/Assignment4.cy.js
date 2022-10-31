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

    /*
    Task 2 – Login and Logout 
        Open https://ineuron-courses.vercel.app/login
        Enter username as  ineuron@ineuron.ai
        Enter password as ineuron
        Click on login button
        Verify welcome message 
        Note- Message will fade away in 10 seconds

        Click on Logout
        Verify user is logged out
    */
        it('Open the URL',()=>{
            cy.visit("https://ineuron-courses.vercel.app/login")
            cy.get("title").should('contain','Courses')
            cy.url().should('contain','login')
            cy.get
        })
});

