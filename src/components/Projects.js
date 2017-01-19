import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    // console.log(this.props)
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem id={project.id} key={project.title} project={project} onDelete={this.handleDelete.bind(this)}/>
        )
      })
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }

  handleDelete(id) {
    console.log('Projects handleDelete id=' + id)
    this.props.onDeleteProjectItem(id)
  }
}

export default Projects;
