import "./topbar.scss"
import logoStar from '../../assets/logostar.svg'
import { Link } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }, props ) {

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    let NavLinks=[
        {name: "work", link:"/"},
        {name: "play", link:"/play"},
        {name: "about", link:"/about"},
        {name: "resume", link:"https://www.figma.com/proto/eowYZpuqqUpv9zoBCo7h4J/resume?page-id=0%3A1&node-id=413%3A2&viewport=-2245%2C-587%2C1.03&scaling=min-zoom"},
      ]

  return (
    <div className={'flex w-full h-50 bg-transparent top-0 left-0 absolute z-10 ' + (menuOpen && "active")}>
        <div className='md:flex items-center justify-between'></div>
        <div className='flex'>
            <a href="" className="mr-1 p-custom">
              <img className="h-10" src={logoStar} alt="" />
            </a>
        </div>
        <div className="right md:hidden">
                <div className="hamburger" onClick={handleClick}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
        </div>

            <ul className=' nav-links md:flex md:items-center pt-6 absolute'>
              {
                NavLinks.map((link) => (
                  <li key={link.name} className="hero-text md:ml-20 text-xl font-semibold hover:text-bold">
                    <a><Link to={link.link}>{link.name}</Link></a>
                  </li>
                ))
                }
            </ul>
    </div>
  )
}
