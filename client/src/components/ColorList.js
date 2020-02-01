import React, { useState, useParams, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom"

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ( props ) => {
  console.log(props);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  

  const editColor = color => {
    console.log('editing color', color);
    setEditing(true);
    setColorToEdit(color);
  };

//   useEffect(() => {
//     const setUpdateColor = props.colors.find(color => `${color.id}` === props.colors.id);
//     console.log('color to update', setUpdateColor);

//     if(setUpdateColor){
//         setColorToEdit(setUpdateColor);
//     }

// }, [props.colors, props.colors.id]);


  const saveEdit = e => {
    // e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now? props.updateColors
    axiosWithAuth()
          .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
          .then(res => {
            console.log(res);
            setColorToEdit(res.data)
            
            axiosWithAuth()
            .get(`http://localhost:5000/api/colors`)
            .then(response => {
              console.log(response);
              
            })
            .catch(err => console.log(err))
          })
          .catch(err => console.log(err));
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`)
      .then(res => {
        console.log(res)
        
        // props.colors.history.push('/protected')
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {props.colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span> 
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }> 
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
