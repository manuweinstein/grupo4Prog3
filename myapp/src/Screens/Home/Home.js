import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'

let apiKey = '5ea8a9872dea100ef148d0562094a5b4'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            moviesPopular: [],
            loadermoviesPopular :true,
            moviesNow: [],
            loadermoviesNow :true,
            seriePopular: [],
            loaderseriePopular :true,
            serieToday: [],
            loaderserieToday :true,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({moviesPopular: data.results, loadermoviesPopular: false})
        })
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({moviesNow: data.results, loadermoviesNow: false})
        })

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({seriePopular: data.results, loaderseriePopular: false})
        })
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({serieToday: data.results, loaderserieToday: false})
        })

    }

    render(){
        return(
            <div class="container">
                <Header />


                <h2 class="alert alert-primary">Popular movies this week <button class='btn btn-primary'><Link to='/movies/popular'>Ver mas</Link></button> </h2>
                {this.state.loadermoviesPopular ? <p>Cargando...</p> :  <ListaCard tipo='movie' data={this.state.moviesPopular.slice(0,5)} /> }

                <h2 class="alert alert-primary">Movies now playing <button class='btn btn-primary'><Link to='/movies/now_playing'>Ver mas</Link></button></h2>
                {this.state.loadermoviesNow ? <p>Cargando...</p> :  <ListaCard tipo='movie' data={this.state.moviesNow.slice(0,5)} /> }

                <h2 class="alert alert-primary">Popular TV shows this week</h2>
                {this.state.loaderseriePopular ? <p>Cargando...</p> :  <ListaCard tipo='tv' data={this.state.seriePopular.slice(0,5)} /> }

                <h2 class="alert alert-primary">TV shows airing today</h2>
                {this.state.loaderserieToday ? <p>Cargando...</p> :  <ListaCard tipo='tv' data={this.state.serieToday.slice(0,5)} /> }

            </div>
        )
    }
}

export default Home;