﻿# Personal-Expense-Tracker
Here’s a sample `README.md` file for your **Personal Expense Tracker** project:

---

# Personal Expense Tracker - Backend API

This project is a **RESTful API** for managing personal financial records such as income and expenses. Users can add, retrieve, update, and delete transactions, and get a summary of their financial activity. This API uses **Node.js**, **Express.js**, and **MongoDB** for storing the data. 

## Features

- Add, retrieve, update, and delete transactions.
- Categorize transactions as **income** or **expense**.
- Get a summary of total income, total expenses, and balance.
- Filter transactions by date range or category (optional).
- Error handling for invalid inputs and missing records.

## Technologies

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (You can use SQLite as an alternative)
- **Environment Variables**: dotenv for configuration
- **API Documentation**: Postman

## Project Structure

```bash
personal-expense-tracker/
│
├── controllers/
│   └── transactionController.js
│   └── categoryController.js
│
├── models/
│   └── transaction.js
│   └── category.js
│
├── routes/
│   └── transactionRoutes.js
│   └── categoryRoutes.js
│
├── config/
│   └── db.js  # Database connection setup
│
├── middlewares/
│   └── errorHandler.js
│
├── package.json
├── app.js
├── .env
└── README.md
```

---

## Getting Started

### Prerequisites

To run this project, you need to have:

- **Node.js** installed (v14 or above)
- **MongoDB** installed and running locally or a cloud MongoDB instance (e.g., MongoDB Atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Siddhu2668/Personal-Expense-Tracker.git
   cd personal-expense-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:
   ```bash
   touch .env
   ```

   Add the following environment variables in your `.env` file:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/expenseTracker
   ```

4. **Run the server**:
   ```bash
   node app.js
   ```

The API will be running on `http://localhost:5000`.

---

## API Endpoints

### Transactions

1. **Create a new transaction**  
   **POST** `/transactions`
   - Request body:
     ```json
     {
       "type": "income", // or "expense"
       "category": "Salary",
       "amount": 1500,
       "date": "2024-10-01",
       "description": "October Salary"
     }
     ```
   - Response:
     ```json
     {
       "_id": "some-id",
       "type": "income",
       "category": "Salary",
       "amount": 1500,
       "date": "2024-10-01",
       "description": "October Salary",
       "__v": 0
     }
     ```

2. **Get all transactions**  
   **GET** `/transactions`
   - Response:
     ```json
     [
       {
         "_id": "some-id",
         "type": "income",
         "category": "Salary",
         "amount": 1500,
         "date": "2024-10-01",
         "description": "October Salary"
       }
     ]
     ```

3. **Get a single transaction by ID**  
   **GET** `/transactions/:id`
   - Response:
     ```json
     {
       "_id": "some-id",
       "type": "income",
       "category": "Salary",
       "amount": 1500,
       "date": "2024-10-01",
       "description": "October Salary"
     }
     ```

4. **Update a transaction**  
   **PUT** `/transactions/:id`
   - Request body:
     ```json
     {
       "category": "Updated Category",
       "amount": 2000
     }
     ```
   - Response:
     ```json
     {
       "_id": "some-id",
       "type": "income",
       "category": "Updated Category",
       "amount": 2000,
       "date": "2024-10-01",
       "description": "October Salary"
     }
     ```

5. **Delete a transaction**  
   **DELETE** `/transactions/:id`
   - Response:
     ```json
     {
       "message": "Transaction deleted"
     }
     ```

### Categories

1. **Create a new category**  
   **POST** `/categories`
   - Request body:
     ```json
     {
       "name": "Salary",
       "type": "income"  // or "expense"
     }
     ```
   - Response:
     ```json
     {
       "_id": "some-id",
       "name": "Salary",
       "type": "income"
     }
     ```

2. **Get all categories**  
   **GET** `/categories`
   - Response:
     ```json
     [
       {
         "_id": "some-id",
         "name": "Salary",
         "type": "income"
       }
     ]
     ```

---

## Error Handling

The API returns appropriate error messages for invalid inputs or actions, such as:

- Invalid transaction/category ID.
- Missing or invalid fields in request bodies.
- Trying to update/delete a non-existent record.

Example error response:
```json
{
  "error": "Transaction not found"
}
```

---

## Future Enhancements

Here are some potential features to implement in the future:

- **User authentication**: Add authentication and link transactions to specific users.
- **Pagination**: Add pagination to the `GET /transactions` endpoint to handle large data sets.
- **Reports**: Create an endpoint to generate reports, such as monthly spending by category.

---


---

## Author

Developed by Siddhu Kalavalapudi (https://github.com/Siddhu2668).

---

This `README.md` file gives an overview of the project setup, usage, and provides details about the API endpoints. You can adjust the content to match your specific implementation or additional features.
