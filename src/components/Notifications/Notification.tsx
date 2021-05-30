import React, { useRef, useState, useMemo, useEffect, MouseEvent } from "react";
import { useTransition } from "@react-spring/web";

interface MessageHubProps {
  config?: {
    tension: number;
    friction: number;
    precision: number;
  };
  timeout?: number;
  children: (add: AddFunction) => void;
}

type AddFunction = (msg: string) => void;

interface Item {
  key: number;
  msg: string;
}

//get notifications instead of alerts
// const Notification = (props: any): any => {
//   return <>{props.childern}</>
// }

// export default Notification
