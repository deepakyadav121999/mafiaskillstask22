import { useEffect, useState } from 'react'

import './App.css';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  return (
    <div className='main_div'>
      <h1>Photos</h1>
      <div className='box_conatiner'>
        {data.map((photo) => (
          <div key={photo.id} className='box'>
            <img src={photo.url} />
            <p className='text'>{truncateText(photo.title, 30)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
