import React from "react";
import { useRouter } from "next/router";


export default function Event() {
  const router = useRouter();

  console.log(router);
  return (
    <div>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
    </div>
  );
}
