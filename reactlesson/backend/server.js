require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");
const cors = require("cors");
//express app
const app = express();

app.use(cors());

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/user/register", usersRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests (once we connected to the DB)
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
