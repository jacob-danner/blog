import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="Nav">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/about"}>About</Link>
            </nav>
        </>
    )
}

export { NavBar }