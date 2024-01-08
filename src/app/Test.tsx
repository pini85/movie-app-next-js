"use client";
import React, { FC, useState } from "react";
import { myAction } from "@/actions/myAction";
const Test = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && (
        <form action={myAction}>
          <input type="text" name="search" placeholder="Search" />
          <button>search</button>
        </form>
      )}
      <button onClick={() => setShow(!show)}>Show</button>
    </div>
  );
};
export default Test;
