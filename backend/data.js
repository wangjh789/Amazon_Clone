import bcrypt from "bcryptjs"

const data = {
    users : [
        {
            name:"woowang",
            email : "admin@example.com",
            password: bcrypt.hashSync("1234",8),
            isAdmin : true,
        },
        {
            name:"wangjh789",
            email : "user@example.com",
            password: bcrypt.hashSync("1234",8),
            isAdmin : false,
        }
    ],
    products:[
        {
            // _id : '1',
            name : "Nike Slim Shirt23",
            category : "Shirts",
            image : "/images/p1.jpg",
            price : 120,
            brand : "Nike",
            countInStock : 10,
            rating : 4.5,
            numReviews : 10,
            description : "high quality product"
        },
        {
            // _id : '2',
            name : "Adidas Slim Shirt",
            category : "Shirts",
            image : "/images/p2.jpg",
            price : 123,
            brand : "Adidas",
            countInStock : 20,
            rating : 4.5,
            numReviews : 10,
            description : "high quality product"
        },
        {
            // _id : '3',
            name : "Puma Slim Shirt",
            category : "Pants",
            image : "/images/p3.jpg",
            price : 300,
            brand : "Puma",
            countInStock : 10,
            rating : 4.5,
            numReviews : 10,
            description : "high quality product"
        },
        {
            // _id : '4',
            name : "Nike Slim Shirt12",
            category : "Shirts",
            image : "/images/p4.jpg",
            price : 3456,
            brand : "Nike",
            countInStock : 0,
            rating : 4.5,
            numReviews : 10,
            description : "high quality product"
        },
        {
            // _id : '5',
            name : "Nike Slim Shirt123",
            category : "Pants",
            image : "/images/p5.jpg",
            price : 120,
            brand : "Nike",
            countInStock : 5,
            rating : 4.5,
            numReviews : 10,
            description : "high quality product"
        }
    ]
};
export default data;