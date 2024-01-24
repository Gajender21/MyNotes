import React, { useRef } from "react";
import Card from "./Card";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";


function Foreground() {
  
  const [note, setNote] = useState([""]);
  const ref =useRef(null);
 

  function onAdd() {
    setNote((prev) => {
      return [...prev, []];
    });
    
  }
  function deleteNote(id) {
    setNote((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function inputChange(value,index) {
    const inputData=[...note];
    inputData[index]=value;
    setNote(inputData);
  }
  
  console.log(note);
  return (
    <div ref={ref} className="fixed z-[3] w-full h-full p-5 flex gap-5 flex-wrap">
      <div className="text-5xl h-[10%] w-full ">
        <div className="absolute right-5 ">
          <div onClick={onAdd}>
            <IoMdAddCircle />
          </div>
        </div>
      </div>

      {note.map((item, index) => {
        return (
          <Card
            key={index}
            id={index}
            onChange={inputChange}
            onDelete={deleteNote}
            refer={ref}
            
          />
        );
      })}
    </div>
  );
}

export default Foreground;
