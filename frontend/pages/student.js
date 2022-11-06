import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Data from '../components/Data';



const student = () => {

    const [data, setdata] = useState([]);

    const [name, setName] = useState("");
    const [Roll, setRoll] = useState(0);
    const [passed, setpassed] = useState(true);

    const btnClick = () => {
        axios
          .post(`http://127.0.0.1:8000/student`, {
              name,Roll,passed
          })
          .then(() => {
            alert(`Your request has been successfully submitted.`);
          })
          .catch((e) => {
            alert(`an error occurred: ${e}`);
          });

    };




    const getdata = () => {
        axios
          .get("http://127.0.0.1:8000/students")
          .then((response) => {
            // handle success
              setdata(response.data);
            console.log(response);
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
          
    } 

    useEffect(() => {
      getdata();
    }, []);

    // axios
    //   .post(`http://127.0.0.1:3000/student/`, {
    //       name: "golu",
    //       Roll: 44,
    //       passed : true
    //   })
    //   .then(() => {
    //     console.log("Your request has been successfully submitted");
    //   })
    //   .catch((e) => {
    //     console.log(`an error occurred: ${e}`);
    //   });


    return (
      <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        {data.map((data, index) => (
          <Data
            key={index}
            name={data.name}
            Roll={data.Roll}
            passed={data.passed}
          />
        ))}

        <input
          type="text"
          style={{ border: "2px solid black" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          style={{ border: "2px solid black" }}
          value={Roll}
          onChange={(e) => {
            setRoll(e.target.value);
          }}
        />
        <input
          type="text"
          style={{ border: "2px solid black" }}
          value={passed}
          onChange={(e) => {
            setpassed(e.target.value);
          }}
        />

        <button
          onClick={() => {
            btnClick();
          }}
        >
          Click me
        </button>
      </>
    );
      
}

export default student