import {Link, useSearchParams} from "react-router-dom"
import  axios  from "axios";

import React from "react";
import { useEffect,useState } from "react";

export const EmployeeList = () => {


const [employda, setEmployeeData] = React.useState([]);

  const fetchdata = () =>{
    axios.get("http://localhost:8080/employee").then((res) => {
      //setEmployeeData(res.data);
      setEmployeeData (res.data);
    })
  }
  console.log(employda)
  React.useEffect(() => {
    fetchdata()
  },[]);
  return (
    <div>
    {employda.map((e) => (
      <Link to={`/employees/${e.id}`}>
        <div
          className="employee_card"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "3em",
            height: "300px",
            width: "300px",
          }}
        >
          <img src={e.image} alt="image" className="employee_image" />
          <span className="employee_name">{e.employee_name}</span>
          <span className="employee_title">{e.title}</span>
        </div>
      </Link>
    ))}  
    </div>
  )
}
