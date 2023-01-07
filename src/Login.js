import React from "react"

export default class Login extends React.Component {
    state = {
        name: "",
        password: "",
        remember: false
    }
    handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        this.setState(prev => {
            return { [name]: value }
        })
    }

    handleLogin = (state) => {
        let loginIfos = {...state};
        this.setState(() => {
            return {
                name: "",
                password: "",
                remember: false
            }
        })
        console.log(loginIfos);
    }


    render() {
        const myStyle = {
            backgroundColor: this.state.password.length < 8 ? "red" : "green"
        }
        return (
            <div>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput}></input>
                <br></br>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput}></input>
                <br></br>
                <label htmlFor="remember">Remember </label>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInput}></input>
                <br></br>
                <button
                    style={ myStyle}
                    disabled={!this.state.name || !this.state.password ? true : false}
                    onClick={() => {this.handleLogin(this.state)}}
                >Login</button>
            </div>
        )
    }
}