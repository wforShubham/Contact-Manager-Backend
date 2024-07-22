const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRouts"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`sever running on port ${port}`);       
});


