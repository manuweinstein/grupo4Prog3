import React, { Component } from "react";
import Header from "../../Components/Header/Header"; 
import Card from "../../Components/Card/Card"; 

const apiKey = "42737f60c529bfe7e9586db8cb132a1c";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      cargando: true,
    };
  }

componentDidMount() {
  const {tipo, id} = this.props.match.params;
  fetch(`https://api.themoviedb.org/3/${tipo}/${id}?language=en-US&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => this.setState({item: data, cargando: false}))
    .catch(console.error);
}


  render() {
    const item = this.state.item
    const cargando = this.state.cargando

    if (cargando) {
      return (
        <div className="loading-container">
          <div className="loader">
            <h1 className="Subtitulos loading">Cargando...</h1>
            <br />
            <img src="/img/loader.gif" alt="Cargando..." />
          </div>
        </div>
      );
    }

    return (
      <>
        <Header />
        <br />
        <div className="detalle">
          <h1 className="nombrePelicula">{item.title || item.name}</h1>
          <Card
            data={item}
            tipo={this.props.match.params.tipo}
            mostrarDetalle={true}   
            mostrarGeneros={true}
            fecha={item.release_date || item.first_air_date}
            duracion={item.runtime || (item.episode_run_time ? item.episode_run_time[0] : null)}
            calificacion={item.vote_average}
          />
          <br /><br />
        </div>
      </>
    );
  }
}

export default Detalle;
