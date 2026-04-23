const express = require("express");
const noteModel = require("./models/notes.model");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

app.post("/api/note", async (req, res) => {
  const { title, diss } = req.body;

  const note = await noteModel.create({ title, diss });

  res.status(201).json({
    msg: "note created suff",
    note,
  });
});

app.get("/api/note", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    msg: "fetched all notes...",
    notes,
  });
});

app.delete("/api/note/:id", async (req, res) => {
  const { id } = req.params;
  const deleteNote = await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    msg: "selected note deleted suff",
    deleteNote,
  });
});

app.patch("/api/note/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const edit = await noteModel.findByIdAndUpdate(id, {
    title: title,
  });

  res.status(200).json({
    msg: "edited titel",
    edit,
  });
});

app.put("/api/note/:id", async (req, res) => {
  const { id } = req.params;
  const { title, diss } = req.body;

  await noteModel.findByIdAndUpdate(id, {
    title: title,
    diss: diss,
  });

  res.status(200).json({
    msg: "edited full note",
  });
});

app.delete("/api/note",async(req,res)=>{
    await noteModel.deleteMany()
    res.status(200).json({
        msg:"deleted all notes"
    })
})


module.exports = app;
