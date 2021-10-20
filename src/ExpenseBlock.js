import { useContext } from "react"
import AppContext from "./AppContext"

const ExpenseBlock = () => {
  const [appContxt, setAppContxt] = useContext(AppContext)

  return (<h1>{appContxt.hello}</h1>)
}

export default ExpenseBlock