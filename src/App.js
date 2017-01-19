import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects:[]
    }
  }

  componentWillMount() {
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
