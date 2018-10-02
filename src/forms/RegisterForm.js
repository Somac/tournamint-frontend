import React from 'react'
import FormGroup from '../components/FormGroup'
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if(!values.name) {
        errors.name = 'Required'
    }
    if(!values.username) {
        errors.username = 'Required'
    }
    if(!values.password) {
        errors.password = 'Required'
    } else if(values.password.length <= 3) {
        errors.password = 'Password needs to be longer than 3 characters'
    }
    if(!values.password2) {
        errors.password2 = 'Required'
    }
    if(values.password !== values.password2) {
        errors.password2 = 'Passwords don\'t match'
    }
    return errors
}


let RegisterForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' type='text' component={FormGroup} label='Nimi'/>
            <Field name='username' type='text' component={FormGroup} label='Käyttäjätunnus'/>
            <Field name='password' type='password' component={FormGroup} label='Salasana'/>
            <Field name='password2' type='password' component={FormGroup} label='Salasana uudestaan'/>
            <button className='btn btn-primary'>Register</button>
        </form>
    )
}

export default RegisterForm = reduxForm({
    form: 'register',
    validate
})(RegisterForm)