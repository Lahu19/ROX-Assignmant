# Roxlier Systems MERN Stack Coding Challenge 🚀

Hey there! 👋 Welcome to the **MERN Stack Coding Challenge** project. This project is all about building a full-stack app that grabs product transactions from a third-party API, stores them in a database, and then shows you all the data with some cool charts and tables! Let’s dive in! 😄

## 📋 Table of Contents
- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Backend APIs](#backend-apis)
- [Frontend Features](#frontend-features)
- [Getting Started](#getting-started)
- [How It All Works](#how-it-all-works)
- [Contributing](#contributing)

## About the Project 💡
In this challenge, the goal is to:
1. Fetch transaction data from a third-party API.
2. Store that data in our database named as (salesDatabase.db file).
3. Build APIs to retrieve and manipulate that data.
4. Use React to display the data in tables and charts. 📊

It’s a full-on MERN stack app, and you’ll get to see the data in action in real time. Pretty cool, right? 😎

## Tech Stack 🛠️
- **Frontend:** React.js ⚛️
- **Backend:** Node.js + Express.js 🌐
- **Database:** SQL Lite3 🍃
- **Charts:** Recharts 📈
- **API Requests:** Fetch 🔄

## Backend APIs 🔙
Here’s a quick rundown of the APIs you’ll be working with:

### 1. Initialize Database 🗄️
- **Endpoint:** `/init`
- **Method:** GET
- **What it does:** Fetches the transaction data from a third-party API and seeds your MongoDB with it.

### 2. List Transactions 💸
- **Endpoint:** `/sales`
- **Method:** GET
- **What it does:** Lists product transactions with support for search (by title, description, or price) and pagination.

### 3. Get Monthly Stats 📊
- **Endpoint:** `/statistics`
- **Method:** GET
- **What it does:** Returns total sales, number of sold items, and unsold items for a selected month.

### 4. Bar Chart Data 📊
- **Endpoint:** `/items`
- **Method:** GET
- **What it does:** Provides data to generate a bar chart, showing the number of items sold in various price ranges.

### 5. Pie Chart Data 🥧
- **Endpoint:** `/categories`
- **Method:** GET
- **What it does:** Returns unique product categories and the number of items in each for a selected month.

### 6. Combined API 📦
- **Endpoint:** `/all-statistics`
- **Method:** GET
- **What it does:** Combines data from all the above APIs into one response. Handy, right?

## Frontend Features 🎨
Once your APIs are ready, here’s what the frontend will do:

- **Transactions Table:** Displays a list of transactions for the selected month. You can search for specific products and paginate through the data.
- **Statistics Box:** Shows total sales, sold items, and unsold items for the selected month. 💰
- **Bar Chart:** Visualizes product price ranges for the selected month.

## Getting Started 🚀
Let’s get you set up:

### 1. Clone the repository:
```bash
git clone https://github.com/Lahu19/Roxiler_Systems.git
cd Roxiler_Systems
```

### 2. Install backend dependencies:
```bash
cd backend
npm install
```

### 3. Install frontend dependencies:
```bash
cd frontend
npm install
```
note: Both step 2 and 3 on differnet terminals at same time.


### 4. Run the backend:
```bash
node index.js
```

### 5. Run the frontend:
```bash
npm start
```

And boom! You’re ready to go! 🎉

## How It All Works ⚙️

1. **Data Initialization:** First, the backend fetches the transaction data from a third-party API and seeds the MongoDB database.
   
2. **Transaction Listing:** Users can select a month from a dropdown, search for transactions, and view them in a table. Pagination is included for easier navigation. 🔎

3. **Stats & Charts:** Users can see monthly statistics (like total sales, sold items, etc.), view a bar chart of price ranges. 📊

4. **Combined Data:** The combined API makes sure all this data is served in one go if needed.

## Contributing 🤝
Want to make this project even better? Feel free to fork the repo, create issues, or submit pull requests! Let’s build something awesome together. 💪

## 📽️ Demo Video
[**Watch the Demo Video**](https://youtu.be/mfEu3KaGvMM) 🎥
