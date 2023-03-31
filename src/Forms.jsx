import React from 'react'

export default function Forms() {
  return (
    <div>
      
      <input type="text" id="name"></input>
      <button onClick={greet}>press to greet</button>
    </div>
  )
}


function greet()
{
  let per=document.getElementById("name").value;
  alert("Check the Console Window");  
  console.log("Hii "+per);
}