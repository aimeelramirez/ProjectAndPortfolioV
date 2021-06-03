import React, { useRef, useState, useMemo, useEffect, MouseEvent } from "react"
import { useTransition } from "@react-spring/web"
import { ToastContainer, toast } from "react-toastify"

export const notify = (props: any): any => toast(props)
