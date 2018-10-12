import React, { Component } from 'react'

class NotFound extends Component {
    componentDidMount() {
        document.title = 'tournamint - 404'
    }
    
    render() {
        return (
                <h1>404 Not Found</h1>
        )
    }
}

export default NotFound
