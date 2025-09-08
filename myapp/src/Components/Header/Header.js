import { Component } from "react";
import React from "react";
import {Link} from 'react-router-dom'
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
                    <form class="search-form" action="results.html" method="get">
                        <input type="text" class="" name="searchData" placeholder="Buscar..." value="" />
                        <button type="submit" class="btn btn-success btn-sm">Buscar</button>
                    </form>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;