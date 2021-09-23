import { Navbar, Container } from "react-bootstrap"
const GlobalNav = () => {
  return (
  <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Rental Income Calculator
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default GlobalNav