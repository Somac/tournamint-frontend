import React from 'react'
import { reduxForm } from 'redux-form';

let SubmitMatchForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <button className='btn btn-primary'>Submit Match</button>
        </form>
    )
}

export default SubmitMatchForm = reduxForm({
    form: 'submitmatch'
})(SubmitMatchForm)
