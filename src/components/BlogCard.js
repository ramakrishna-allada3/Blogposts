import  { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

const BlogCard = (props) => {
    const history = useHistory();

    function onClick() {
        if (props.clickable) {
            history.push("/post/" + props.id);
        }
    }

    return (
        <Card onClick={onClick} style={{ width:  props.width ? props.width : '18rem', cursor: props.clickable ? 'pointer' : '' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: 'large', fontWeight: '500'}}>{ props.title }</Card.Title>
                <Card.Text>
                    { props.body }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;