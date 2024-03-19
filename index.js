const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT; // Make sure this port matches the one you're using

// Define a route for the root URL ('/')
app.get('/login', (req, res) => {
  res.status("200")
  .json({msg:"hey you are log in route"})
});

app.get('/register', (req, res) => {
  res.status("200")
  .json({msg:"hey you are on register route"})
});

app.get('/', (req, res) => {
  res.status("200")
  .json({msg:"working"})
});



// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
