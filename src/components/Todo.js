import Header from "./Header";
import { useHistory } from "react-router-dom";
import { Spinner, Button, Container, Table, TableHeaderColumn } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

const Todo = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(true);
    const [todos, setTodos] = React.useState();

    function navigateToPosts() {
        history.push("/posts");
    }

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
            setTodos(response.data);
            setIsLoading(false);
        });
    }, []);

    return (<>
        <Header title='Todo' />
        <Container>
            <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
                <Button onClick={navigateToPosts}>Go to BlogPosts</Button>
            </div>
            {
                isLoading ? <div className='spinner-container'><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div> :
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Task</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(todo => <tr>
                                <td>{todo.userId}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? '✔️': '❌'}</td>
                            </tr>)}
                        </tbody>
                    </Table>
            }
        </Container>
    </>);
}

export default Todo;