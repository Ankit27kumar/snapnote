import { useEffect, useState } from "react";
import React from "react";
import Button from '@mui/material/Button';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


function Writenode() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adnote, setAdnote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getnote", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        });
        const data = response.data.journal;
        console.log(data);
        setAdnote(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const addNote = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/note", {
        title: title,
        description: description
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      const newNote = response.data;
      setAdnote(prevNotes => [...prevNotes, newNote]); // Update state with new note
      setTitle(""); // Clear input fields after adding note
      setDescription("");
      // forceUpdate();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }
  

  const deleteNote = async (noteId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/delete/${noteId}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      // Update state to remove the deleted note
      setAdnote(prevNotes => prevNotes.filter(note => note._id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <div className='navbar'>
        <span className='brandName'>SnapNote
          <Button className='loginbutton' variant="contained" href="/">logout</Button>
        </span>
      </div>
      <center>
      <Card className="noteclass">
        <TextField className="notetitle" value={title} type="text" placeholder='Title'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> <br />
        <textarea className="notedec" value={description}  type="text" placeholder='Description' cols="80" rows="17"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
       
          <Button className="notebutton" variant="contained" onClick={addNote}>Publish</Button>
      
      </Card>
      </center>
     
        {adnote.map((note, index) => (
            <Card key={note._id} className="carddetial">
              <CardContent>
               {/* <p>{date}</p> */}
                <Typography>
                {/* <div className=""> */}
               
                  <p className="tit">{note.title}</p>
                  {/* <p>{note._id}</p> */}
                  <p className="dic">{note.description}</p>
                  <Button onClick={() => deleteNote(note._id)}>Delete</Button>
                  {/* </div> */}
                  <br />
                </Typography>
              </CardContent>
            </Card>
          
        ))}
     
    </div>
  )
}

export default Writenode;
