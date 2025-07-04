const express = require('express');
const app = express();

// Built‑in middleware to parse JSON bodies
app.use(express.json());

app.post('/notes', (req, res) => {
  // Whatever JSON you send from Postman appears here
  console.log(req.body);
  notes.push(res.body)
  res.json({
    message: "Note added successfully",
    notes: note
  })

  // Echo it back so Postman sees something
//   res.status(201).json({
//     message: 'Note received!',
//     data: req.body
//   });
 });

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
