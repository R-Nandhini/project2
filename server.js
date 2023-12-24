const express = require("express");

app.use(express.json());
let port = process.env.PORT || 4000;

// method - get
// public
// get user
app.get('/', (req, res) => {
    res.send('Hello My World');
  });
  
app.listen(port, () => console.log(`Server listening on port ${port}`));