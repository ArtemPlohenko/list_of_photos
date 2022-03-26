import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

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
      <Link to="/albums">Back</Link>
      <div>
        <button onClick={() => setOffset(Math.max(offset -size, 0))}>
          prev
        </button>
        {offset / size}
        <button onClick={() => setOffset(offset + size)}>next</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <h3>{photo.title}</h3>
            <img alt={props.title} src={photo.thumbnailUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPage;
