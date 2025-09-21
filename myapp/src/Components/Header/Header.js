import { Component } from "react";
import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="brand">
                    <img src="/logo.png" alt="TresientosTres" className="site-logo" />
                </Link>
                <nav>
                    <ul className="nav nav-tabs my-4">
                        <li className="nav-item">
                            <Link to='/' >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/movies/popular'>
                                Peliculas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/series/popular'>
                                Series
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favoritos">
                                Favoritos
                            </Link>
                        </li>
                    </ul>
                    <form className="search-form" action="/search" method="get">
                        <input type="text" className="" name="search" placeholder="Buscar..." />
                        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                        <label>movie</label><input type="radio" name="tipo" value="movie" />
                        <label>serie</label><input type="radio" name="tipo" value="tv" />
                    </form>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;