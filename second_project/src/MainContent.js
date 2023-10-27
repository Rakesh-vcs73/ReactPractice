import React from "react"

export default function MainContent() {
    return (
        <div>
            <h1 className="main-heading">Steps to create React app</h1>
            <ol className="main-list">
                <li>Install node and npm in the machine</li>
                <li>Use command <b>npx create-react-app <i>project_name</i></b> to create react app</li>
                <li><b>npm start</b> to start the application on <b>localhost://3000</b> port by default</li>
            </ol>
        </div>
    )
}
