import {Button,Card} from "react-bootstrap";
import img from "./img.jpg";
import "./style.css";
function MotivationCard(props){
    return (
        <Card className="card1">
            <Card.Img className="img" variant="top" src={img} />
            <Card.Body>
                <Card.Title className="mheading">Your Daily Motivation</Card.Title>
                <Card.Text className="mtext">{props.quote}</Card.Text>
                <Button className="mbutton" variant="danger" onClick={()=>{props.setx(props.x+1)}}>Refresh</Button>
            </Card.Body>
        </Card>
    );
}
export default MotivationCard;
