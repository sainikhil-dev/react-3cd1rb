import React, { useState } from 'react';
import './style.css';

export default function ListImage({ data }) {
  return (
    <div className="container">
      {data.map((value) => {
        return (
          <div className="item">
            <img
              src={value}
              alt="images"
              style={{ height: 'auto', width: '100px' }}
            />
          </div>
        );
      })}
    </div>
  );
}
