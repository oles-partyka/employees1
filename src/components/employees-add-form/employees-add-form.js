import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAddItem(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render () {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
          <h3>Add a new employee</h3>
          <form className="add-form d-flex">
              <input 
                type="text"
                className="form-control new-post-label"
                placeholder="What's his name?" 
                value={name}
                name='name'
                onChange={this.onValueChange}
              />
              <input 
                type="number"
                className="form-control new-post-label"
                placeholder="Salary in $?"
                value={salary}
                name='salary'
                onChange={this.onValueChange}
              />
  
              <button 
                type="submit"
                className="btn btn-outline-light"
                onClick={this.onSubmit}
              >
                Add
              </button>
          </form>
      </div>
    )
  }
}

export default EmployeesAddForm;