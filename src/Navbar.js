import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" class="site-title"> 
            Vicky Chen
        </Link>
        <ul>
            <CustomLink to="/about">About me</CustomLink>
            <CustomLink to="/work-exprence">Work Experience</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}