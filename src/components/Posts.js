import React from 'react';
import FlexCard from './FlexCard';
import { Spinner, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import { useHistory } from "react-router-dom";

const Posts = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [posts, setPosts] = React.useState();
    const history = useHistory();

    function navigateToTodo() {
        history.push("/todo");
    }


    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
            setIsLoading(false);
        });
        document.title = 'Blogposts - Posts';
    }, [])

    return (
        <>
        <Header title='Blogposts'/>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px'}}>
        <Button onClick={navigateToTodo}>Go to Todo App</Button>
        </div>
            {
                isLoading ? <div className='spinner-container'><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div> : <div className='blogposts'>
                    {posts.map(post => <FlexCard id={post.id} title={post.title} body={post.body} clickable={true} />)}
                </div>
            }
        </>
    );
}

export default Posts;