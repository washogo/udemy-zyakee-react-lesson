import { Link, useNavigate } from "react-router-dom"

export const Page1 = () => {
  const arr = [...Array(100).keys()]

  const navigate =useNavigate();

  const onClickDetailA = () => navigate("detailA")

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="detailA" state={arr}>DetailA</Link>
      <br />
      <Link to="detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  )
}