import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <ListGroup className="list-albums">
      <li className="first-line flex-group mb-15">
        <Button variant="outline-primary" onClick={() => setOffset(Math.max(offset - size, 0))}>prev</Button>
        {offset / size}
        <Button variant="outline-primary" onClick={() => setOffset(offset + size)}>next</Button>
      </li>
      {ListAlbums.map((album) => (
        <ListGroup.Item key={album.id}>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListAlbums;
