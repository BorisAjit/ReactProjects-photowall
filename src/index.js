import React from "react";
import ReactDOM from "react-dom";
import Main from './Components/Main';
import './styles/stylesheet.css'
// let todo = ['Go get a good job','Now get a life','Travel more and enjoy life'];

// const element = React.createElement('ol',null, todo.map((task,index)=>React.createElement('li',{key:index},task)));

ReactDOM.render(<Main/>, document.getElementById('root'));
