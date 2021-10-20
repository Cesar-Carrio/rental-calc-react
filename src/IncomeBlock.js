import { useContext, useState } from "react"
import { Container, InputGroup, FormControl } from "react-bootstrap"
import AppContext from "./AppContext"

const IncomeBlock = () => {
  const [appContxt, setAppContxt] = useContext(AppContext) // Grabbing global context and function to change global state
  const [userInput, setUserInput] = useState('default')

  const changeHello = () => {
    setAppContxt(Object.assign({ ...appContxt }, { hello: userInput }))
  }

  const updateUserInput = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <Container>
      <h1>{userInput}</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={updateUserInput}
          value={userInput}
        />
      </InputGroup>
      <button onClick={changeHello}>
        {appContxt.hello}
      </button>
    </Container>
  )
}



export default IncomeBlock