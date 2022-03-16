import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Home
      <hr />
      Coming soon...
      <hr />
      Enter into Organization : <Link to='/abc/'>abc</Link>
    </div>
  );
}

export default Home;
