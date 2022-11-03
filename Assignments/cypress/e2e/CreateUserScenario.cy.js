///<reference types="cypress"/>
/*
    Task 1 – Create new user and login with same user
    Open https://ineuron-courses.vercel.app/
    Click on Login Button
    Click on New User link (use contains method)

    Verify Sign up button is disabled before entering value
	
    Enter Name, Email, Password
    Select testing from checkbox
    Select Gender
    Select State as “Goa”
    Click on Sign up
    User above used details for login
    Verify user is able to login
    Click on Logout and verify  user is able to see login page

*/
describe('New User Creation Scenario', () => {
    it('Create new user and login with same user using CSS', () => {
        cy.visit("https://ineuron-courses.vercel.app/") 
        cy.get('.navbar-menu-parent button').click()      
        cy.contains('New user? Signup').click()
        cy.get('.submit-btn').should('be.disabled')
        cy.get('#name').type('Misthi Deyol').should('contain.value','Misthi Deyol')
        cy.get('#email').type('misthi@gmail.com').should('contain.value','misthi')
        cy.get('#password').type('test@123')
        cy.get("input[name='63076c4329bb13ec21816100']").check()
        cy.get('input[value=Male]').check()
        cy.get('select[name=state]').select('Goa')
        cy.get('.submit-btn').click()
        cy.get('#email1').type('deyolpayal1@gmail.com')
        cy.get('#password1').type('test@123')
        cy.get("button[type='submit']").click()
        cy.get("div[class='navbar-menu-links'] button").click()
        cy.get('#email1').should('be.empty')
    });

    it.only('Create new user and login with same user using XPATH', () => {
        cy.visit("https://ineuron-courses.vercel.app/") 
        cy.xpath("//button[contains(text(),'Log in')]").click()      
        cy.contains('New user? Signup').click()
        cy.xpath("//button[@type='submit']").should('be.disabled')
        cy.xpath("//input[@id='name']").type('Misthi Deyol').should('contain.value','Misthi Deyol')
        cy.xpath("//input[@id='email']").type('Misthi@gmail.com').should('contain.value','Misthi')
        cy.xpath("//input[@id='password']").type('test@123')
        cy.xpath("//input[@name='63076c4329bb13ec21816100']").check()
        cy.xpath("//input[@id='gender' and @value='Male']").check()
        cy.xpath("//select[@id='state']").select('Goa')
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//input[@name='email1']").type('Misthi@gmail.com')
        cy.xpath("//input[@type='password']").type('test@123')
        cy.xpath("//button[contains(.,'Sign in')]").click()
        cy.xpath("//button[contains(.,'Sign out')]").click()
        
    });
    
});