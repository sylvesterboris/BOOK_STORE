const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/Books");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/Books", bookRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
