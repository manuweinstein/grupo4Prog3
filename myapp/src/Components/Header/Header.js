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
                <h1>UdeSA Movies</h1>

                <nav>
                    <ul class="nav nav-tabs my-4">
                        <li class="nav-item">
                            <Link to='/' >
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/movies/:tipo'>
                                Peliculas
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="series.html">Series</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="favorites.html">Favoritas</a>
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