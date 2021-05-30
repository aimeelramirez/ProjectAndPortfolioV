// import React, { useState, useEffect } from "react"
import { Parallax } from "@react-spring/parallax";

// Get the images to the grid to save in the data to show on load as a component to reuse
export default function Pages(props: any): any {
  //if i want to pass in more than one item than just a number
  return (
    <Parallax
      pages={props.pages}
      className="parallax"
      style={{ top: "0", left: "0" }}
    >
      {props.children}
    </Parallax>
  );
}
