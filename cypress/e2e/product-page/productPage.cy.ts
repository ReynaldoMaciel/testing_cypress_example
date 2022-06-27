describe('Test Product Page', () => {
  beforeEach(() => {
    const sku = 'product-2'
    cy.viewport('macbook-11')
    cy.visit(`/products/${sku}`)
  })  

  it('should visit product page and check if button is visible', () => {
    cy.get('#addToBag').contains('Add to bag').should('be.visible')
  })

  it('should add product to cart, and display success message', () => {
    cy.interceptGraphql('AddProductToCart',{
      data: {
        addProductToCart: {
          id: 1,
          products: []
        }
      }
    })

    cy.get('#addToBag').click()
    cy.contains("Successfully added product to the cart!").should("be.visible")
  })

  it('should add product to cart, and display error message', () => {
    cy.interceptGraphql('AddProductToCart',{
      errors: [
        {
          message: "Product is already added to the cart",
        }
      ]
    })

    cy.get('#addToBag').click()
    cy.contains("Product was already added to the cart").should("be.visible")
  })
})