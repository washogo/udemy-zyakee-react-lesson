import { useParams, useSearchParams } from "react-router-dom"

export const UrlParameter = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{searchParams.get("name")}です</p>
    </div>
  )
}