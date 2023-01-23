# POC-eletrowish

Eletrowish is an API that suports the creation of a "electronic wishlist", containing products that you wish to buy, including a goal date for you to buy them.

## Routes

### **GET: /products**

Returns an array with all products

### **GET: products/:id**

Returns the product with the id selected

### **POST: /products**

Add a product on the wishlist

Requires a body in the following format:
```
{
  "name": "Product name",
  "price": price,
  "store": "Store name",
  "target_date": "yyyy-mm-dd"
}
```

### **DELETE: /products/:id**

Removes a product from the wishlist

The :id param must be the **id** of the product you want to delete

### **PUT: /products/:id**

Update a product from the wishlist

The :id param must be the **id** of the product you want to update

Requires a body in the following format:
```
{
  "name": "Product name",
  "price": price,
  "store": "Store name",
  "target_date": "yyyy-mm-dd"
}
```