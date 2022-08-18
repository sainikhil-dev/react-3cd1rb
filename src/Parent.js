import React, { useState } from 'react';
import './style.css';
import App from './App';
import ListImage from './ListImage';
export default function Parent() {
  let [data, setData] = useState([]);
  let [showData, setShowData] = useState(false);
  return (
    <div>
      {showData ? (
        <ListImage data={data} />
      ) : (
        <App
          data={data}
          setData={setData}
          showData={showData}
          setShowData={setShowData}
        />
      )}
    </div>
  );
}
