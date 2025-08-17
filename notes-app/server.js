const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model"); // <-- import your model

connectToDB();
const app = express();

app.use(express.json()); // middleware to parse JSON

app.get("/", (req, res) => {
  res.send("hello rakhi");
});

// make callback async so we can use await
app.post("/notes", async (req, res) => {
    const { title, content } = req.body;
    console.log(title, content);

    await noteModel.create({
      title,
      content,
    });

    res.json({
      message: "Note created successfully",
    });

});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
