import React from 'react';
import './App.css';
// import Todo from './Components/Todo';
import ListAlbums from './Components/ListAlbums';
// import { useState } from 'react';


function App() {
  // const [searchPhoto, setSearchPhoto] = useState("");
  return (
    <div className='wrapper'>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          // setSearchPhoto(event.target.value);
          return event.target.value;
        }}
      />

      <ListAlbums />
    </div>
  )
}

export default App;