import React, { useState, useEffect } from 'react';

const ListAlbums = () => {
  const [ListAlbums, setListAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5')
    .then(response =>  response.json())
    .then((data) => {
      setListAlbums(data);
    });
  }, []);

  console.log(ListAlbums);
  return (
    <div>
      {
        ListAlbums.map(element => {
          return (
            <div key={element.id}>
              {element.id}
            </div>
          )
        })
      }
    </div>
  )

};

export default ListAlbums;