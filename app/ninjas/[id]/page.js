"use client"
import { useEffect, useState } from "react";

function NinjaDetail({ params }) {

  const [ninja, setNinja] = useState(null);

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      
      const filteredNinja = data.find(ninja => ninja.id === parseInt(params.id));
      setNinja(filteredNinja);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      {ninja ? (
        <div>
          <h1>{ninja.name}</h1>
          <p>Email: {ninja.email}</p>
          <p>Phone: {ninja.phone}</p>
          <p>Website: {ninja.website}</p>
          <p>address: {ninja.address.city}</p>
          <p>Username: {ninja.username}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default NinjaDetail;
