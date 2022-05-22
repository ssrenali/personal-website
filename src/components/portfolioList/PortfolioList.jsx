import "./portfolioList.scss";

function PortfolioList({id, title, active, setSelected, setItemIndex}) {

  const changePortfolio = () => {
    setSelected(id);
    setItemIndex(0);
  }

  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}

export default PortfolioList
