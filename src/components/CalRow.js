import { Button, Col } from "react-bootstrap";
import "./style.css";
var n1,operator="@";
function CalRow(props){
    function operatorClick(){
        n1=parseFloat(props.val);
        operator=props.four;
        props.setVal(props.val+props.four);
    }
    return(
        <>
            <Col xl={2.7}><Button onClick={() => {props.setVal(props.val+props.one)}} className="button" size="lg" variant="info" >{props.one}</Button></Col>
            <Col xl={2.7}><Button onClick={() => {props.setVal(props.val+props.two)}} className="button" size="lg" variant="info" >{props.two}</Button></Col>
            <Col xl={2.7}><Button onClick={() => {props.setVal(props.val+props.three)}} className="button" size="lg" variant="info" >{props.three}</Button></Col>
            <Col xl={2.7}><Button onClick={operatorClick} className="button" size="lg" variant="warning" >{props.four}</Button></Col>
        </>
    );
}
export {CalRow,n1,operator};