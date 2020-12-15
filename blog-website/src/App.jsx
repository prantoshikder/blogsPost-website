import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogsDetails from './Components/Home/BlogsDetails/BlogsDetails';
import AddBlogPost from './Components/Home/AddBlogPost/AddBlogPost';
import UpdatePost from './Components/Home/UpdatePost/UpdatePost';

function App() {
  return (
    <Router >
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogsdetails/:BlogsCard">
            <BlogsDetails></BlogsDetails>
          </Route>
          <Route path="/addblogpost">
            <AddBlogPost></AddBlogPost>
          </Route>
          <Route path="/updatepost/:id" component={UpdatePost} />
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
