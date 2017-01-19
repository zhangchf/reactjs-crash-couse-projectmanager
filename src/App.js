import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import uuid from 'uuid';
import $ from 'jquery'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects:[],
      todos: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err)
      }
    })
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]})
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.getProjects()
    this.getTodos()
  }

  handleAddProject(project) {
    let projects = this.state.projects
    project.id = uuid.v4()
    projects.push(project)
    this.setState(projects, function() {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDeleteProjectItem={this.onDeleteProjectItem.bind(this)}/>
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }

  onDeleteProjectItem(id) {
    console.log("App onDeleteProjectItem, id=" + id)
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({projects: projects})
  }
}

export default App;
