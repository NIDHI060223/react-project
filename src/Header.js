import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from './App';

function Header() {
    const { logout, setLogout, username, setUsername } = useContext(userLogin);
    console.log(logout)
    const nav = useNavigate();

    const logoutUser = () => {
        setLogout(false)
        setUsername("")
        nav('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                        Zay
                    </a>

                    <div>Welcome,{username} </div>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/shop'>Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <a className="nav-icon d-none d-lg-inline" href="#search" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            <Link className="nav-icon position-relative text-decoration-none" to="/add-cart/:id">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </Link>
                            <a className="nav-icon position-relative text-decoration-none" href="#user">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                            </a>
                            {
                                logout
                                    ?
                                    <Link className="btn btn-primary text-white mx-5" type="button" onClick={logoutUser}>Logout</Link>
                                    :
                                    <>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <Link className="btn btn-primary me-md-2 text-white mx-3" type="button" to='/login'>Login</Link>
                                            <Link className="btn btn-primary text-white" type="button">Register</Link>
                                        </div>
                                    </>

                            }
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header
