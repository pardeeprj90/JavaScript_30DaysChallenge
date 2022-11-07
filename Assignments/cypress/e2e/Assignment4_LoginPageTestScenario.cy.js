/// <reference types="cypress" />
/*
Task 1 – Verify URL and title
    Open https://ineuron-courses.vercel.app/login
    Verify title contains Courses 
    Verify url contains login
*/
describe('I Neauron Web App Testing', () => {
    it('Open the URL and validate title',()=>{
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
        it('Open the URL Validate welcome message and logout and then validate succesful logout',()=>{
            cy.visit("https://ineuron-courses.vercel.app/login")
            cy.get("title").should('contain','Courses')
            cy.url().should('contain','login')
            cy.get('#email1').type('ineuron@ineuron.ai')
            cy.get('#password1').type('ineuron')
            cy.get("button[type='submit']").click()
            cy.get('.welcomeMessage',{timeout:10000}).should('contain.text','Welcome iNeuron to iNeuron Courses')
            cy.get("div[class='navbar-menu-links'] button").click()
            cy.get('#email1').should('be.empty')
            
        })
        /*
        Task 3- Write 4 test in same suite for verifying error message

        Test 1- Do not enter username and password and click on login button
        Verify error message should contains “Email and Password is required”
        
        Test 2- Enter username and do not enter password and click on login button
        Verify error message should contains “Password is required”
        
        Test 3- Enter password and do not enter username and click on login button
        Verify error message should contains “Email is required”
        
        Test 4- Enter wrong username and wrong password and click on login button
        Verify error message should contains “USER Email Doesn't Exist”
        */
       it('Verify validation Error msgs When user not enters the Username and password',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('#email1').click()
        cy.get('#password1').click()
        cy.get("button[type='submit']").click()
        cy.get('.errorMessage').should('contain','Email and Password is required')        
       })
       it('Verify validation Error msgs When user enters the valid Username and do not enters the password',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('#email1').type('ineuron@ineuron.ai')
        cy.get('#password1').click()
        cy.get("button[type='submit']").click()
        cy.get('.errorMessage').should('contain','Password is required')        
       })

       it('Verify validation Error msgs When user enters the valid password and do not enters the username',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('#email1').click()
        cy.get('#password1').type('ineuron')
        cy.get("button[type='submit']").click()
        cy.get('.errorMessage').should('contain','Email is required')        
       })
       it('Verify validation Error msgs When user enters wrong username & Password',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('#email1').type('test@test.com')
        cy.get('#password1').type('test')
        cy.get("button[type='submit']").click()
        cy.get('.errorMessage').should('contain',"USER Email Doesn't Exist")        
       })
});

