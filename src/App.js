import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import Todo from './components/Todo';

function App() {

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/posts" component={Posts} />
                <Route path="/todo" component={Todo} />
                <Route path="/post/:id" component={Post} />
            </Switch>
        </div>
    );
}

export default App;
