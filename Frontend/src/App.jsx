import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  function getNotes() {
    axios.get("http://localhost:3000/api/note").then((res) => {
      // console.log(res.data);
      setNotes(res.data.notes);
    });
  }

  function handelSubmit(e) {
    e.preventDefault();

    const { title, diss } = e.target;
    // console.log(title.value, diss.value);

    // axios.post("http://localhost:3000/api/note", {
    //   title: title.value,
    //   diss: diss.value,
    // });
    // const formData = {
    //   title: title.value,
    //   diss: diss.value,
    // };
    addNote(title, diss);
    e.target.reset();
  }

  async function addNote(title, diss) {
    const response = await axios.post("http://localhost:3000/api/note", {
      title: title.value,
      diss: diss.value,
    });

    console.log(response.data);
    getNotes();
  }

  return (
    <div className="app">
      <div className="fo">
        <form onSubmit={handelSubmit}>
          <input type="text" name="title" placeholder="enter title" />
          <input type="text" name="diss" placeholder="enter diss" />
          <button>Create Note</button>
        </form>
      </div>
      {notes.map((item) => (
        <div key={item._id} className="notes">
          <h1>{item.title}</h1>
          <p>{item.diss}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
