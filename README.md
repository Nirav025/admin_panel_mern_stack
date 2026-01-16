# 🛒 MERN Admin Dashboard – Admin Panel

This project is a **full-stack Admin Dashboard application** built using the **MERN Stack** (MongoDB, Express.js, React, Node.js).  
It allows admins to **manage categories, subcategories, and products**, including **product image upload, update, and removal**, along with a **dashboard that displays overall statistics**.

The backend uses **MongoDB populate** to maintain relationships between Category, Subcategory, and Product.  
The frontend is developed using **React with Redux Toolkit and Redux Thunk** for efficient state management and API handling.

The UI follows a **clean, admin-friendly layout**, making it suitable for real-world admin panels as well as portfolio showcase.

---

## 🚀 Features  

* 📁 **Category Management**
  * Add new categories  
  * View category list  
  * Update and remove categories  

* 📂 **Subcategory Management**
  * Add subcategories under categories  
  * Category name fetched using **MongoDB populate**  
  * View subcategories with category reference  
  * Update and remove subcategories  

* 📦 **Product Management**
  * Add products with category & subcategory  
  * Upload product image from frontend  
  * Update product details and image  
  * Remove products  

* 🖼️ **Product Image Upload**
  * Image upload using Multer  
  * Existing image preview while updating  
  * Image replace support  

* 📊 **Admin Dashboard**
  * Total number of categories  
  * Total number of subcategories  
  * Total number of products  
  * Total sum of all product prices  

* ⚡ **Full MERN Stack Integration**
  * React frontend with Redux Thunk  
  * Node.js & Express backend  
  * MongoDB with populated relations  

---

## 🛠️ Tech Stack  

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40" height="40"/>  
  <b>React</b> — Frontend library for building UI  
  <br/><br/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" width="40" height="40"/>  
  <b>Redux Toolkit & Redux Thunk</b> — State management and async API handling  
  <br/><br/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40" height="40"/>  
  <b>Node.js</b> — Backend runtime environment  
  <br/><br/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="40" height="40"/>  
  <b>Express.js</b> — Backend framework for APIs  
  <br/><br/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="40" height="40"/>  
  <b>MongoDB</b> — Database with populate relations  
  <br/><br/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="40" height="40"/>  
  <b>CSS / Bootstrap</b> — Styling and responsive UI  
</p>

---

## 📸 Project Preview  

### 📊 Dashboard  
<img src="./output/dashboard.png" alt="Dashboard"/>

### ➕ Add Category  
<img src="./output/addcate.png" alt="Add Category"/>

### 📁 View Category  
<img src="./output/viewcate.png" alt="View Category"/>

### ➕ Add Subcategory  
<img src="./output/addsubcate.png" alt="Add Subcategory"/>

### 📂 View Subcategory  
<img src="./output/viewsubcate.png" alt="View Subcategory"/>

### ➕ Add Product  
<img src="./output/addproduct.png" alt="Add Product"/>

### 📦 View Product  
<img src="./output/viewproduct.png" alt="View Product"/>

---

## ⚙️ How It Works  

1. Admin accesses the dashboard after starting the application.  
2. Categories are created first, followed by subcategories linked to categories.  
3. Products are added using category and subcategory references.  
4. Backend uses **MongoDB populate** to fetch related category and subcategory data.  
5. Product images are uploaded from frontend and stored on the server.  
6. Dashboard dynamically displays counts and total product price.  

---

## 🌟 Highlights  

* MongoDB **populate usage for relational data**  
* Product image upload, update, and preview  
* Redux Toolkit with Thunk for clean state management  
* Separate frontend and backend architecture  
* Real-world **Admin Dashboard project**   

---

## 👨‍💻 Author  

Developed by **Nirav Thakor**  
MERN Stack Developer  
