import React from 'react'
import logo from '../media/logo.png';
export const Header = () => {
    return (
        <>

            <div className='container-fluid nav_bg mt-4 ' >
                <div className='row'>
                    <div className='col-10 mx-auto' >
                        <nav className="navbar navbar-light">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} alt="" width="160" height="71" />
                                </a>
                                <div className='col-sm-5'>
                                <b>Hotline:</b> 0581-2514484 | <b>E-Mail:</b>getmailboxgmail.com
                                </div>
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </div><hr />
        </>
    )
}
