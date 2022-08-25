import "./topbar.scss"
import greenLogo from '../../assets/greenLogo.svg'

export default function Topbar({ menuOpen, setMenuOpen }) {

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    let NavLinks=[
        {name: "portfolio", link:"/"},
        {name: "art", link:"/"},
        {name: "about", link:"/"},
        {name: "resume", link:"/"},
      ]

  return (
    <div className={'flex w-full h-50 bg-transparent top-0 left-0 absolute z-10 ' + (menuOpen && "active")}>
        <div className='md:flex items-center justify-between'></div>
        <div className='flex'>
            <a href="" className="mr-1 p-custom">
              <img className="h-10" src={greenLogo} alt="" />
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
                  <li key={link.name} className="md:ml-20 text-xl font-semibold text-cream hover:text-orange">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))
                }
            </ul>
    </div>
  )
}
