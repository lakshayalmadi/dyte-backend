const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();
const pastes = require("./routes/pastes");
const app = express();

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URI;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/pastes", pastes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});