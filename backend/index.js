require("./conn/mongo");

const { Teacher, Student } = require("./model/myModel");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*"
  })
);

app.post("/student", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(404).send(err);
    })

})

app.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.send(studentData);
  } catch (e) {
    res.send(e);
  }
});



app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
