function NavBar() {
    return(
        <nav>
        <h1>Restaurant</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

    )
}



const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
const contents = 
(
        <div>
            <NavBar />
        </div>
)
    
root.render(
contents
)
