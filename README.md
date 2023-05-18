# Upstyle

A Full Stack web store that provides user-interface that enables customers to browse products, add filters to them, add them to their cart, and checkout seamlessly. It also includes admin panel where admin can track and manage the products, orders, feedback, users and ratings.

## Tech Stack Used

### Fontend

     - React
     - React Router Dom
     - React Redux
     - Redux thunk
     - Chart Js
     - Css
     - Chakra Ui (External Css)

### Backend

     - NodeJs
     - Express Js
     - Mongo Db (For storing Data)
     - Mongoose (To connect database with the server)

## Team Member

- Faizal Siddiqui
- nikhil angolkar
- Devarshi Ojha
- Prince Kishorbhai Mendpara
- Ragini Kaushal

## Key Responsibilities

- Faizal Siddiqui

  - Managed Team
  - Created backend
  - Created Admin Crud Functionality for
    - Products
    - Users
    - Feedbacks
    - Ratings
    - Orders

- Nikhil Angolkar
  - Created
    - Navbar
    - Products Page
    - Filter Functionalities
    - Cart Functionality
    - Payment page
- Prince Kishorbhai Mendpara
  - Created
    - Admin landing Page
    - Charts
    - Orders Page
- Devarshi Ojha
  - Created
    - Landing page
    - Login Authentication Page
    - Signup Page
    - Admin SignUp Page
- Ragini Kaushal - Created - Data

# Backend

## Backend Routes

| Route                | Method | Description                                |
| -------------------- | ------ | ------------------------------------------ |
| /users/register      | POST   | Sign Up User                               |
| /users/login         | POST   | Login User                                 |
| /users/all           | GET    | Get all Users details                      |
| /users               | GET    | Get the details of the logged-in User      |
| /users/:id           | PATCH  | Update User Details                        |
| /users/:id           | DELETE | Delete User                                |
| /products/all        | GET    | Get all products                           |
| /products/:id        | GET    | Get Single product                         |
| /products/           | POST   | Add product                                |
| /products/:id        | PATCH  | Update product details                     |
| /products/:id        | DELETE | Delete Product                             |
| /cart                | GET    | Get cart items of the logged-in user       |
| /cart/all            | GET    | Get all cart items of all users            |
| /cart                | POST   | Add product to the user's cart             |
| /cart/:id            | PATCH  | Update the quantity and size of cart item  |
| /cart/:id            | DELETE | Delete item from cart                      |
| /orderedproducts/all | GET    | Get all ordered products                   |
| /orderedproducts     | GET    | Get ordered products of the logged-in user |
| /orderedproducts     | POST   | Add cart products from cart to orders      |
| /orderedproducts/:id | PATCH  | Update the status of ordered product       |
| /orderedproducts/:id | DELETE | Cancel the order                           |
| /user/feedback/all   | GET    | Get all the feedbacks of the users         |
| /user/feedback       | POST   | Add Feedback                               |

# landing Page

its a page where you can go to the menpage or women page and also you can do login if you want to do
![Screenshot (1278)](https://user-images.githubusercontent.com/112858862/235775898-6caac441-4f4c-459c-8a5b-40f8c655be51.png)

# SignUp Page

![Screenshot (1280)](https://user-images.githubusercontent.com/112858862/235775197-4b9ba628-75cd-4d11-a522-2c5c649e2d0e.png)

# Admin Register Page

![Screenshot (1281)](https://user-images.githubusercontent.com/112858862/235775208-5e72f1f6-9938-4db7-b282-5466df365e7e.png)

# Login Page

![Screenshot (1279)](https://user-images.githubusercontent.com/112858862/235775294-4e7ec287-1dd8-418e-a63c-1fa12873f4f5.png)

# Products page

![Screenshot (1282)](https://user-images.githubusercontent.com/112858862/235775334-486d8d97-a165-468f-a721-e30af83c59c5.png)

# Product detail page

![Screenshot (1283)](https://user-images.githubusercontent.com/112858862/235775351-8d22d5dd-629c-41a1-83ad-375dc30ce30f.png)

# Cart

![Screenshot (1284)](https://user-images.githubusercontent.com/112858862/235775364-5cbc0b00-eb92-43ff-a236-0a22bcdb3817.png)

# Payment page

![Screenshot (1285)](https://user-images.githubusercontent.com/112858862/235775380-95358247-da81-47ab-82bb-27e2e164460e.png)

# Order Status Page

![Screenshot (1286)](https://user-images.githubusercontent.com/112858862/235775509-6e811326-02e6-41d4-bc44-92a31cb6b16c.png)

# Admin Side

# Admin Dashboard page

![Screenshot (1287)](https://user-images.githubusercontent.com/112858862/235775523-36ef11fd-3120-4752-b70a-8db11ddd3f4c.png)
![Screenshot (1288)](https://user-images.githubusercontent.com/112858862/235775536-faed223b-e4c6-422f-8623-84b72eca006d.png)

# Admin Products Manage Page

![Screenshot (1289)](https://user-images.githubusercontent.com/112858862/235776308-6d04b5d2-c3ca-4f0c-a104-523f559d3fbe.png)
![Screenshot (1290)](https://user-images.githubusercontent.com/112858862/235776317-e0b893c2-3582-4f96-ab0c-2d7320297191.png)

# Admin User Manage Page

![Screenshot (1291)](https://user-images.githubusercontent.com/112858862/235775618-35c9f4ea-c05e-4e8e-a9a5-d970babebbf3.png)
![Screenshot (1292)](https://user-images.githubusercontent.com/112858862/235775629-585fbfb8-f968-4e12-b5c8-fe8487667262.png)

# Admin Orders Manage Page

![Screenshot (1294)](https://user-images.githubusercontent.com/112858862/235775767-a892c3fa-8248-4d64-a5c4-478ec50e0a9a.png)
![Screenshot (1295)](https://user-images.githubusercontent.com/112858862/235775791-e4134803-4464-4212-a856-d299b46fbdc3.png)
![Screenshot (1296)](https://user-images.githubusercontent.com/112858862/235775812-786fc0d1-fd56-414a-b21f-dcc238681a0c.png)

# Admin Feedback Page

![Screenshot (1293)](https://user-images.githubusercontent.com/112858862/235775653-931ed867-b394-43ca-a412-ebaddecf0d08.png)
