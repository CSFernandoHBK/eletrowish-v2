# POC-eletrowish

Eletrowish is an API that suports the creation of a "electronic wishlist", containing products that you wish to buy, including a goal date for you to buy them.

## How to use:

#### 1. Create an empty database
#### 2. Configure the .env DATABASE_URL
#### 3. Run the migration command
```
npx prisma migrate dev
```
#### 4. Run the seed command
```
npm run prisma:seed
```
#### 5. Start the server
```
npm run dev
```
#### 6. Read the routes and enjoy :) 

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