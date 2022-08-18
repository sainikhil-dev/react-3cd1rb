import React, { useState } from 'react';
import './style.css';

export default function App({ data, setData, setShowData }) {
  function filterFile(text) {
    let values = text.split('\n');
    values.pop();
    setData(values);
  }

  async function display(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      filterFile(text);
    };
    reader.readAsText(e.target.files[0]);

    //console.log(reader.readAsText(e.target.files[0]));
  }
  return (
    <div>
      <h1>Hello !</h1>
      <p>Upload a file :</p>
      <label for="myfile">Select a file:</label>
      <input
        type="file"
        id="myfile"
        onChange={(e) => display(e)}
        name="myfile"
      />
      <br />
      <br />
      <br />
      {data.length > 0 && (
        <label>
          <button onClick={(e) => setShowData(true)}>Click </button> to view
          images
        </label>
      )}
    </div>
  );
}
