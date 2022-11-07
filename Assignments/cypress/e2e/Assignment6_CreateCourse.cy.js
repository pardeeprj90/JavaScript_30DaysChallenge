///<reference types="cypress"/>
/*
Task 1- Create course using cypress with data from fixture
Precondition – Create json file “CourseData.json” and store all test data which is needed for below test.
Create custom command login which will accept username and password then perform login functionality. 

Note- Do not duplicate the code

***************************Test Steps:-****************************
Mouse Hover on Manage
Click on Manage Course
Click on Add New Course
Do not fill any values and click on Save
Verify error message “Please select a thumbnail!”
Upload any file from fixture folder
Enter course name, description
Type your name as INSTRUCTOR 
Note- use delay as argument to type slow use delay of 1000 ms
Set price 200
Select start date and end date
Click on category as Testing
Click on Save
Verify course added in the list
Select the same course and click on delete
Verify course deleted from the list
*/
describe('Create Course using Login functionality as Command', () => {
    beforeEach(function() {
        cy.fixture('CreateCourseTestData').then((data)=> {
            this.data = data
        })
      })

    it('Create Course', function() {
        cy.visit('https://ineuron-courses.vercel.app/login')
        cy.get('#email1').type(this.data.email).should('have.value',this.data.email)
        // cy.get('#email1').type('ineuron@ineuron.ai').should('have.value','ineuron@ineuron.ai')
        
        cy.get('#password1').type(this.data.password).should('have.value',this.data.password)
        cy.get('.submit-btn').type('{enter}')
        
        // Mouse Hover on Manage Course
        cy.get('div:nth-of-type(2) > span').realHover();
        cy.wait(1000)

        // Click on Manage Course
        cy.xpath("//span[contains(text(),'Manage Courses')]").click()
        cy.xpath("//tbody/tr").should('have.length.gt',3)
        
        // Click on Add New Course
        cy.contains('Add New Course').click({force:true})
        // without filling the form click on save button
        cy.contains('Save').click()
        cy.get('.errorMessage').should('have.text','Please select a thumbnail!')
        // Upload the image using selectFile cypress  method
        cy.get('#thumbnail').selectFile('C:/Users/Pradeep/Downloads/TestImage.jpeg')
        // cy.fixture('TestImage.jpeg').as('jpegFileToUpload') 
        // cy.get('#thumbnail').selectFile('jpegFileToUpload')
        cy.get('#name').type('PK_Test_Course')
        cy.get('#description').type(this.data.courseDescription)
        
        // Type instructor name as self name
        cy.get('#instructorNameId').type(this.data.instructorName,{delay:100})
        // cy.get('.intructorsList p').each(function(instructorName,num1,list1){
        //     if(instructorName.text()=='s'){
        //         cy.wrap(instructorName).click()
        //     }
        // })
        // Set price=200
        cy.get('#price').clear().type('200')
        // Select start Date and End date
        cy.xpath("//input[@name='startDate']").clear().type(this.data.courseStartDate)
        cy.xpath("//input[@name='endDate']").clear().type(this.data.courseEndDate)
        cy.get("path[stroke='black']").click({force:true})
        cy.get(".menu-items button").each(function(courseCategory){
            if (courseCategory.text()==this.data.courseCategory){
                cy.wrap(courseCategory).click()
            }
        })
        cy.contains("Save").type('{enter}')
        cy.scrollTo('bottom')
        // Validate course addition
        cy.contains("PK_Test_Course").then(function($courseDescription){
            let text_val = $courseDescription.text()
            cy.wrap(text_val).should('have.value','PK_Test_Course')
            
        })
        

    });
});