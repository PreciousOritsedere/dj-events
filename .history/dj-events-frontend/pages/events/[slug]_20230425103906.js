import React from "react";
import { useRouter } from "next/router";


export default function Event() {
  const router = useRouter();
  return (
    <div>
      <h1>My Event</h1>
    </div>
  );
}
