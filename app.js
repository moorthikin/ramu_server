const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const users = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 28,
      "address": {
        "street": "123 Main St",
        "city": "Springfield",
        "state": "IL",
        "zip": "62701"
      },
      "orders": [101, 102]
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "age": 34,
      "address": {
        "street": "456 Elm St",
        "city": "Shelbyville",
        "state": "IL",
        "zip": "62565"
      },
      "orders": [103]
    }
  ],
  "products": [
    {
      "id": 201,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99,
      "stock": 50
    },
    {
      "id": 202,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 699.99,
      "stock": 150
    },
    {
      "id": 203,
      "name": "Coffee Maker",
      "category": "Home Appliances",
      "price": 49.99,
      "stock": 30
    }
  ],
  "orders": [
    {
      "id": 101,
      "userId": 1,
      "productIds": [201, 203],
      "total": 1049.98,
      "date": "2023-05-01"
    },
    {
      "id": 102,
      "userId": 1,
      "productIds": [202],
      "total": 699.99,
      "date": "2023-05-02"
    },
    {
      "id": 103,
      "userId": 2,
      "productIds": [201],
      "total": 999.99,
      "date": "2023-05-03"
    }
  ]
}

app.get('/post', (req, res) => {

  res.send(users)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})