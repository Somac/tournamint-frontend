import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/userReducer'
import Loading from '../components/Loading'
import { Redirect } from 'react-router'

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false
        }
    }
    componentDidMount = async () => {
        await this.props.logout()
        this.setState({ loggedOut: true })
    }
    render() {
        if(this.state.loggedOut) {
            return (
                <Redirect to='/' />
            )    
        }
    
        return (
            <Loading />
        )
    }
}

export default connect(
    null,
    { logout }
)(Logout)