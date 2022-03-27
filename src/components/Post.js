import axios from "axios";
import Header from "./Header";
import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import BlogCard from "./BlogCard";

const Post = () => {

    const { id } = useParams();
    const [post, setPost] = React.useState();
    const [comments, setComments] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then((response) => {
            setPost(response.data);
            axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id).then((response) => {
                setComments(response.data);
                setIsLoading(false);
            });
        });
    }, [])


    return (
        <>
            <Header title='Blogposts'/>
            <Container>
                {
                    isLoading ? <div className='spinner-container'><Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></div> : <div style={{marginTop: '50px'}}>
                        <BlogCard width='100%' id={id} title={post.title} body={post.body} clickable={false} />
                        <div className="comments-container border">
                            <h6> {comments.length} Comments </h6>
                            {
                                comments.map(comment => <BlogCard width='100%' id={id} title={comment.name} body={comment.body} clickable={false} />)
                            }
                        </div>
                    </div>
                }
            </Container>
        </>
    );
}

export default Post;