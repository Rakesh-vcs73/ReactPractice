import React from "react"
import { createRoot } from "react-dom/client"

import "./style.css"

import App from "./App"



const container = document.getElementById("root");
const root = createRoot(container)


//console.log(content)

root.render(
    <div>
        <App />
    </div>
)