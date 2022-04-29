import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {Button, ListGroup, Form} from 'react-bootstrap';

const AlbumPage = (props) => {
  const {id} = useParams();
  const size = 10;
  const [offset, setOffset] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(
      search
        ? `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=${size}&_start=${offset}&title_like=${search}`
        : `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=${size}&_start=${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, [offset, search]);

  return (
    
    <div className="wrapper">
      <Link
        className="mb-15"
        to="/albums">
          Back
      </Link>
      <div className="btns-block flex-group mb-15">
        <Button onClick={() => setOffset(Math.max(offset -size, 0))}>prev</Button>
        {offset / size}
        <Button onClick={() => setOffset(offset + size)}>next</Button>
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search..."
            onChange={(event) => {
            setSearch(event.target.value);
            }}
           />
        </Form.Group>
      </Form>
      <div className="list-group-holder">
        <ListGroup>
          {photos.map((photo) => (
            <ListGroup.Item key={photo.id}>
              <h2 className="title-h2">{photo.`title`}</h2>
              <img alt={props.title} src={photo.thumbnailUrl} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default AlbumPage;
