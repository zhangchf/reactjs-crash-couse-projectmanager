import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        &nbsp;&nbsp;<a href="#" onClick={this.onDelete.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }

  onDelete(id) {
    console.log("ProjectItem onDelete, id=" + id + ", props.id=" + this.props.project.id)
    this.props.onDelete(id)

  }

}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
