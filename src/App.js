import React, {useState, useEffect} from "react";
import data from "./assets/data.json"

import './App.css';

export default function App() {

  console.log(data);

  // {apiData && apiData.length>0 && apiData.map((item)=><p>{item}</p>)}
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}


