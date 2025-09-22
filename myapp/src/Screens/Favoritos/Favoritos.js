import { Component } from "react";
import Header from "../../Components/Header/Header";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import ListaCard from "../../Components/ListaCard/ListaCard";

let api_key = "5ea8a9872dea100ef148d0562094a5b4"

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesFavoritas: [],
            seriesFavoritas: [],
            loadingMovies: 0,
            loadingSeries: 0,
            idsPeliculas: [],
            idsSeries: []
        }
    }

    componentDidMount() {
        let idsPeliculas = JSON.parse(localStorage.getItem('peliculasFavoritas'))
        if (idsPeliculas !== null) {
            idsPeliculas.map(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
                    .then(res => res.json())
                    .then(data => {
                        let moviesFavoritas = this.state.moviesFavoritas
                        moviesFavoritas.push(data)
                        this.setState({
                            moviesFavoritas: moviesFavoritas,
                            loadingMovies: this.state.loadingMovies + 1
                        })
                    })
            })
        } else {
            idsPeliculas = [] 
        }
    
        let idsSeries = JSON.parse(localStorage.getItem('seriesFavoritas'))
        if (idsSeries !== null) {
            idsSeries.map(id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
                    .then(res => res.json())
                    .then(data => {
                        let seriesFavoritas = this.state.seriesFavoritas
                        seriesFavoritas.push(data)
                        this.setState({
                            seriesFavoritas: seriesFavoritas,
                            loadingSeries: this.state.loadingSeries + 1
                        })
                    })
            })
        } else {
            idsSeries = []
        }
    
        this.setState({
            idsPeliculas: idsPeliculas,
            idsSeries: idsSeries
        })
    }    


        render() {

            return (

                <div className="container">

                    <Header />

                    <h2 className="alert alert-primary">Peliculas favoritas </h2>
                    {this.state.idsPeliculas.length == 0 ? <p>No hay peliculas favoritas</p> : this.state.loadingMovies !== this.state.idsPeliculas.length ? <p>Cargando...</p> : <ListaCard tipo='movie' data={this.state.moviesFavoritas} />}
                    <h2 className="alert alert-primary">Series favoritas </h2>
                    {this.state.idsSeries.length == 0 ? <p>No hay series favoritas</p> : this.state.loadingSeries !== this.state.idsSeries.length ? <p>Cargando...</p> : <ListaCard tipo='tv' data={this.state.seriesFavoritas} />}


                    <Footer />

                </div>
            )
        }

    }

export default Favoritos;