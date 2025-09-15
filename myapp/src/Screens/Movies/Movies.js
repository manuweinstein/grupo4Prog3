import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import './Movies.css'
import Footer from "../../Components/Footer/Footer";

let apiKey = '5ea8a9872dea100ef148d0562094a5b4'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loader: true,
            page: 1,
            inputValue: '',
            moviesFiltradas: []
        }
    }

    componentDidMount() {
       // console.log(this.props);

        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                this.setState({ movies: data.results, loader: false })
            })
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=${apiKey}&page=${this.state.page + 1}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: this.state.movies.concat(data.results), page: this.state.page + 1 })
            })
    }

    manejarInput = (e) => {
        console.log(e);

        this.setState({ inputValue: e.target.value })

        let moviesFiltradas = this.state.movies.filter(unaPeli => {
            return unaPeli.title.toLowerCase().includes(e.target.value.toLowerCase())
        })

        console.log(moviesFiltradas);


        this.setState({ moviesFiltradas: moviesFiltradas })
    }
    render() {
        return (
            <div className="container">
                <Header />
                <input onChange={this.manejarInput} type="text" className="" name="searchData" placeholder="Buscar..." value={this.state.inputValue} />
                <h2 className="alert alert-primary"> {this.props.match.params.tipo == 'popular' ? 'Popular movies this week' : 'Movies now playing'} </h2>
                {this.state.loader ? <p>Cargando...</p> : <ListaCard data={this.state.inputValue.length == 0 ? this.state.movies : this.state.moviesFiltradas} tipo='movie' />}
                
                <button onClick={() => this.cargarMas()} className='btn btn-primary'>Cargar más</button>

            <Footer />
            </div>
        )
    }
}

export default Movies;