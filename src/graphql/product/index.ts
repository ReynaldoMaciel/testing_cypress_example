import { gql } from "@apollo/client";

export const QUERY_CARTS = gql`
  query Carts {
    carts {
      id
      products {
        sku
        name
        price
        description
        details
        rate
        images {
          id
          url
          description
        }
      }
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query Product($sku: String!) {
    product(sku: $sku) {
      sku
      name
      price
      description
      details
      rate
      images {
        id
        url
        description
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query Products {
    products{
      products {
        sku
        name
        price
        description
        details
        rate
        images {
          id
          url
          description
        }
      }
    }
  }
`;

export const ADD_PRODUCT_TO_CART = gql`
  mutation AddProductToCart($cartId: Int, $sku: String, $quantity: Int) {
    addProductToCart(cartId: $cartId, sku: $sku, quantity: $quantity) {
      id
      products {
        sku
        description
        details
        name
        price
        rate
      }
    }
  }
`

export const REMOVE_PRODUCT_OF_CART = gql`
  mutation removeProductFromCart($cartId: Int, $sku: String!) {
    removeProductFromCart(cartId: $cartId, sku: $sku){
      id
      products {
        sku
        name
        price
        description
        details
        rate
        images {
          id
          url
          description
        }
      }
    }
  }
`