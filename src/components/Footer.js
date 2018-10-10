import React, { Component } from 'react'
import githubLogo from '../assets/github.png'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='py-3 m-0'>tournamint app</p>
                        </div>
                        <div className='col d-flex align-items-center justify-content-end'>
                            <a 
                                href='https://github.com/Somac/tournamint-frontend' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <img src={githubLogo} alt='github' className='github-logo' />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer