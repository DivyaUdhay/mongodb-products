//Find all the information about each products
db.products.find();

//Find the product price which are between 400 to 800
db.products.find({
    $and: [
      { 
      product_price: { $gt: 400 },
     }, 
      {
         product_price: { $lt: 800 },
         },
        ],
  })
  .toArray();

//Find the product price which are not between 400 to 600
db.products.find({
    $or: [
      {
         product_price: { $gt: 400 }, 
        },
         {
           product_price: { $lt: 600 },
           }
          ],
  })
  .toArray();

//List the four product which are grater than 500 in price
db.products.find({
   product_price: { $gt: 500 }
   }).limt(4);

//Find the product name and product material of each products
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).toArray();

//Find the product with a row id of 10
db.products.find({ id: "10" }).toArray();

//Find only the product name and product material
db.products.find({} , { product_name: 1, product_material: 1,  }).toArray();

//Find all products which contain the value of soft in product material
db.products.find({ product_material: "Soft" }).toArray();


//Find products which contain product color indigo  and product price 492.00
db.products.find(
  { $and:[ { product_price: 492.0 }, {product_color: "indigo" } ] }).toArray();


//Delete the products which product price value are same

