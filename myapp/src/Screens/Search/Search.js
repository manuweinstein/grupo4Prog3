import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";

let apiKey = '5ea8a9872dea100ef148d0562094a5b4'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: [],
            cargando: true,
            tipo: 'movie',
        }

    }
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const buscando = params.get('search');
        fetch(`https://api.themoviedb.org/3/search/movie?query=${buscando}&api_key=${apiKey}`)
            .then(resp => resp.json())
            .then(data => this.setState({ resultados: data.results, cargando: false }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <React.Fragment>
            <Header />
            
             <h2> Resultados de búsqueda </h2>
    
            {this.state.cargando
              ? <p>Cargando...</p>
              : <ListaCard data={this.state.resultados} tipo={this.state.tipo} />
            }
            </React.Fragment>
          
    
        )
}
}

export default Search