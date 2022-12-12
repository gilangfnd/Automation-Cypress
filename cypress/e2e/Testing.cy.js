describe('working with input', () => {
    it('visit the website', () => {
      cy.visit('https://www.saucedemo.com/')
   
      cy.fixture("user").then(user => {
        const username1 = user.username1
        const username2 = user.username2
        const username3 = user.username3
        const username4 = user.username4
        const password = user.password
        cy.login(username1, username2, username3, username4, password)
      })
    })
  })
  