import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    // console.log(this.props)
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project} onDelete={this.onDelete.bind(this)}/>
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

  onDelete(id) {
    console.log('Projects handleDelete id=' + id)
    this.props.onDeleteProjectItem(id)
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDeleteprojectItem: React.PropTypes.func
}

export default Projects;
