describe('testing e2e', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:5173/')
  })
  it('passes', () => {
  })

  it("Should be able navigate to cart", ()=> {
    cy.get('[href="/cart"]').click()
    cy.get('#root > :nth-child(2)').should("contain", "Cart page")
    cy.url().should('include', '/cart')
  })

  it("Should be able navigate to products", ()=> {
    cy.get('[href="/products"]').click()
    cy.get('#root > :nth-child(2)').should("contain", "Products")
    cy.url().should('include', '/products')
  })

  it("Should be able navigate to contact", ()=> {
    cy.get('[href="/contact"]').click()
    cy.url().should('include', '/contact')
  })

  it("Shoud be able to submit contact", ()=> {
    cy.visit('http://localhost:5173/contact')

    cy.get('[type="email"]').should("be.visible").type("joao@govfacil.com")
    cy.get('[type="tel"]').should("be.visible").type("40028922")
    cy.get('select').should("be.visible").select("Morro cabeça de vento")
    cy.get('textarea').should("be.visible").type("Descrição legalzinha")

    cy.get('.sc-iBdnpw').should("be.visible").click()

  })
})