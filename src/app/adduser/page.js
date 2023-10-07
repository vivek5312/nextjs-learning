"use client";
import { useState } from "react";
import { json } from "react-router-dom";

export default function User() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    console.log(name, age, email);
    let response=await fetch('http://localhost:3000/api/newtask',{
        method:'Post',
        body:JSON.stringify({name,age,email}),
    })
    response=await response.json()
    if(response.success){
        alert('user created successfully')
    }
    else{
        alert('some error in input field')
    }
    console.log(response);
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          value={name}
          placeholder="enter your name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="enter your age"
          onChange={(e) => setage(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
