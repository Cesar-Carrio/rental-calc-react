import IncomeBlock from "./IncomeBlock";
import CashFlowBlock from "./CashFlowBlock";
import CashOnCashRoiBlock from "./CashOnCashRoiBlock";
import ExpenseBlock from "./ExpenseBlock";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <IncomeBlock />
        </Col>
        <Col sm={12}>
          <CashFlowBlock />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ExpenseBlock />
        </Col>
        <Col sm={12}>
          <CashOnCashRoiBlock />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;