import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createRoot } from "react-dom/client"
import { Routes } from "./Routes"
import './globals.css'

const container = document.getElementById("app")
if (!container) {
    throw Error('No #app in document.')
}
const root = createRoot(container)
root.render(
    <>
        <ToastContainer position="top-center" />
        <Routes />
    </>
)
