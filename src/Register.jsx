import React, { Component } from 'react';

import './Register.scss';

import { isEmail } from 'validator';

class Register extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        paswword2: '',
        errorName: undefined,
        errorSurname: undefined,
        errorEmail: undefined,
        errorPassword: undefined,
        errorPassword2: undefined,
        mainError: undefined,
        registerDone: false,
    };

    validate = () => {

        if (this.state.password !== this.state.password2) {
            this.setState({ errorPassword2: 'los passwords no coinciden' });

        } else {
            this.setState({ errorPassword2: undefined });
        }
        if (isEmail(this.state.email)) {
            this.setState({ errorEmail: undefined });
        } else {
            this.setState({ errorEmail: 'email no válido' });
        }
        if (this.state.name.length >= 3) {
            this.setState({ errorName: undefined });
        } else {
            this.setState({ errorName: 'el nombre debe contener al menos 3 caracteres' });

        }
        if (this.state.surname.length >= 3) {
            this.setState({ errorSurname: undefined });
        } else {
            this.setState({ errorSurname: 'el apellido debe contener al menos 3 caracteres' });
        }
    };


    handleChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
        this.validate()
    };

    handleSubmit = ev => {
        const { errorName, errorSurname, errorEmail, errorPassword, errorPassword2 } = this.state;

        ev.preventDefault();
        this.validate();
        if (errorName && errorSurname && errorEmail && errorPassword && errorPassword2) {
            if ((errorName || errorSurname || errorEmail || errorPassword || errorPassword2)) {
                this.setState({ mainError: 'corrija primero los errores' })
            } else {
                this.setState({ registerDone: true })
            }
        }
    };

    render() {
        const { errorName, errorSurname, errorEmail, errorPassword, errorPassword2, name, surname, email, password, password2 } = this.state;

        if (this.state.registerDone) {
            return <h1>Registro Completado con éxito!</h1>
        }

        return (
            <form className='Register' onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeHolder='nombre' onChange={this.handleChange} value={name} />
                <div className='error'>{this.state.errorName}</div>

                <input type='text' name='surname' placeHolder='apellidos' onChange={this.handleChange} value={surname} />
                <div className='error'>{this.state.errorSurname}</div>

                <input type='text' name='email' placeHolder='email' onChange={this.handleChange} value={email} />
                <div className='error'>{this.state.errorEmail}</div>

                <input type='password' name='password' placeHolder='password' onChange={this.handleChange} value={password} />
                <div className='error'>{this.state.errorPassword}</div>

                <input type='password' name='password2' placeHolder='repite password' onChange={this.handleChange} value={password2} />
                <div className='error'>{this.state.errorPassword2}</div>

                <input type='submit' name='register' />
                <h1 className="error">{this.state.mainError}</h1>
            </form>
        );
    }
}

export default Register