import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    //   will only show active class if menuOpen is true
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">
                    serena
                </a>
            </div>
            <div className="right">
                <div className="hamburger" onClick={handleClick}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>

        </div>
    </div>
  )
}
