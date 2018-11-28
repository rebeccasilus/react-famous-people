import React, {Component} from 'react';


class FamousPerson extends Component {

    state = {
        famousPerson: {
            name : '',
            role : ''
        }
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState({
                famousPerson: {
                    ...this.state.famousPerson,
                    [propertyName]: event.target.value
                }
            })
        }
    }

    render () {
        return (
            <div className="content">
                <div className="inputStyle">
            <input type="text" placeholder="A famous person" onChange={this.handleChangeFor('name')}/>
            <input type="text" placeholder="Role" onChange={this.handleChangeFor('role') } />
            </div>
            <div className="outputStyle">
            The famous person is:  {this.state.famousPerson.name}
            <div>
                Their role is: {this.state.famousPerson.role}
                    </div>
            </div>
            </div>
        )
    }
}

export default FamousPerson;