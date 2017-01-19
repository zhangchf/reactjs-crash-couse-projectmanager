import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  constructor() {
    super()
    this.state = {
      newProject: {}
    }
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Title can not be empty')
    } else {
      this.setState({
        newProject: {
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function() {
        this.props.addProject(this.state.newProject)
        this.refs.title.value = ''
      })
    }
    e.preventDefault()
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label><br />
            <select type="text" ref="category">
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit"/>
          <br/>
        </form>
      </div>
    );
  }
}

export default AddProject;
