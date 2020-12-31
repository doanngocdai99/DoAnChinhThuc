import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            middleName: '',
            lastName: '',
            age: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                middleName: employee.middleName,
                lastName: employee.lastName,
                age: employee.age,
                email : employee.email
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, middleName: this.state.middleName, lastName: this.state.lastName, age: this.state.age, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeMiddleNameHandler= (event) => {
        this.setState({middleName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Cập Nhật</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Họ: </label>
                                            <input placeholder="Họ" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tên lót: </label>
                                            <input placeholder="Tên lót" name="middleName" className="form-control" 
                                                value={this.state.middleName} onChange={this.changeMiddleNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tên: </label>
                                            <input placeholder="Tên" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tuổi: </label>
                                            <input placeholder="Tuổi" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Lưu lại</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Hủy</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
