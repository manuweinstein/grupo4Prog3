import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";

let apiKey = '5ea8a9872dea100ef148d0562094a5b4'

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            loader: true,
            page: 1,
            inputValue: '',
            moviesFiltradas: []
        }
    }

    componentDidMount(){
        console.log(this.props);
        
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({movies: data.results, loader: false})
        })
    }

    cargarMas(){        
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=${apiKey}&page=${this.state.page + 1}`)
        .then(res => res.json())
        .then(data => {
            this.setState({movies: this.state.movies.concat(data.results), page: this.state.page + 1})
        })
    }


    render(){
        return(
            <div class="container">
                <Header />

                <button onClick={() => this.cargarMas()} class='btn btn-primary'>Cargar más</button>
            </div>
        )
    }
}

export default Movies;