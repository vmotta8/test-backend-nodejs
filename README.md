# Backend Analyst Candidate Testing at Anota Ai

#### This branch contains the API code that I managed to develop in approximately 5 hours 

## Setup

Complete the .env file
```
SECRET_MD5=
MONGO_URL=
MONGO_URL_TEST=
```

Install dependencies
```
test-backend-nodejs % yarn
```

Run the tests to make sure everything is ok
```
test-backend-nodejs % yarn test
```

Run server
```
test-backend-nodejs % yarn dev
```

## Routes
  - ```/users/register``` POST
    - Route for user registration: ```{
      name: 'My Name'
      email: 'myemail@email.com',
      password: '123456'
    }```

  - ```/users/authentication``` GET
    - Route for user authentication: ```{
      email: 'myemail@email.com',
      password: '123456'
    }```

  - ```/products/add-product``` POST
    - Bearer Token will be required
    - Route to add product: ```{
      title: 'Product',
      description: 'Product Description',
      category: 'Product Category',
      price: 40
    }```

  - ```/products/edit-category``` POST
    - Bearer Token will be required
    - Route to edit product category: ```{
      category: 'Product Category',
      newCategory: 'New Product Category'
    }```

  - ```/products/show-all``` GET
    - Bearer Token will be required
    - Route to show all products: ```No Body```

  - ```/products/show-title``` GET
    - Bearer Token will be required
    - Route to show the product with this title: ```{
      title: 'Product'
    }```

  - ```/products/show-category``` GET
    - Bearer Token will be required
    - Route to show all products in this category: ```{
      category: 'Product Category'
    }```

  - ```/products/delete``` POST
    - Bearer Token will be required
    - Route to delete a product: ```{
      title: 'Product'
    }```

  - ```/products/update``` POST
    - Bearer Token will be required
    - Route to update product: ```{
      title: 'Product',
      description: 'New Product Description',
      category: 'New Product Category',
      price: 40
    }```
