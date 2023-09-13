"use client";
import styles from "@styles/Ninjas.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

function page() {
  const [ninjas, setNinjas] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setNinjas(data);
  };

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((ninja) => (
          <div key={ninja.id}>
            <Link className={styles.single} href={`/ninjas/${ninja.id}`}>
              <h3 className="">{ninja.name}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default page;
