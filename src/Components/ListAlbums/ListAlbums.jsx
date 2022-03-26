import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const ListAlbums = (props) => {
  const size = 10;
  const [ListAlbums, setListAlbums] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums?_limit=${size}&_start=${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
        setListAlbums(data);
      });
  }, [offset]);

  return (
    <ul>
      <button onClick={() => setOffset(Math.max(offset - size, 0))}>prev</button>
      {offset / size}
      <button onClick={() => setOffset(offset + size)}>next</button>
      {ListAlbums.map((album) => (
        <li key={album.id}>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListAlbums;
