import {CalRow,n1,operator} from "./CalRow";
import { Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import "./style.css";
function Calculator(props){
    var n2,ans;

    // to calculate the answer
    function evaluate(){
        n2=parseFloat(props.val.split(operator)[1]);
        if(operator==="+")
          ans=n1+n2;
        else if(operator==="-")
          ans=n1-n2;
        else if(operator==="*")
          ans=n1*n2;
        else if(operator==="/")
          ans=n1/n2;
        props.setVal(ans);
      }
      
    return(
        <Card className="card2">
        <Card.Body>
            <Card.Header><h1 className="heading">CALCULATOR</h1></Card.Header>
            <br />
            <Container fluid >
                <Row>
                    <Col>
                    {/* to create a readonly input field to display the value of the button user presses on the calculator and also to display the answer */}
                    <Form><FormControl className="button1 input" type="text" readOnly defaultValue={props.val} /></Form>
                    </Col>
                </Row>
                {/* CalRow creates a row of four buttons with three numbers and one operator */}
                <Row className="margin"><CalRow one="7" two="8" three="9" four="*" setVal={props.setVal} val={props.val} /></Row>
                <Row className="margin"><CalRow one="4" two="5" three="6" four="+" setVal={props.setVal} val={props.val} /></Row>
                <Row className="margin"><CalRow one="1" two="2" three="3" four="-" setVal={props.setVal} val={props.val} /></Row>
                <Row className="margin"><CalRow one="0" two="00" three="." four="/" setVal={props.setVal} val={props.val} /></Row>
                <Row className="margin marginb">
                    {/* to create clear and equal to button */}
                    <Col xs={4.5}><Button onClick={()=> {props.setVal("")}} className="button1" size="lg" variant="secondary">Clear</Button></Col>
                    <Col xs={4.5}><Button onClick={evaluate} className="button1" size="lg" variant="secondary">=</Button></Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
    );
}
export default Calculator;