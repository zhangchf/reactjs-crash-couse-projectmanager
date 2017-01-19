import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        &nbsp;&nbsp;<a href="#" onClick={this.onDelete.bind(this, this.props.id)}>X</a>
      </li>
    );
  }

  onDelete(id) {
    console.log("ProjectItem onDelete, id=" + id + ", props.id=" + this.props.id)
    this.props.onDelete(id)

  }
}

export default ProjectItem;
