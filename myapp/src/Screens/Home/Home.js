import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import './Home.css'
import Footer from "../../Components/Footer/Footer";

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
           let pop5=[]
            for (let i = 0; i < 4; i++) {
             pop5.push(data.results[i]);
            }
            this.setState({moviesPopular: pop5, loadermoviesPopular: false})
        })
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            let now5=[]
            for (let i = 0; i < 4; i++) {
             now5.push(data.results[i]);
            }
            this.setState({moviesNow: now5, loadermoviesNow: false})
        })

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            let seriepop5=[]
            for (let i = 0; i < 4; i++) {
             seriepop5.push(data.results[i]);
            }
            this.setState({seriePopular: seriepop5, loaderseriePopular: false})
        })
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            let serieairing=[]
            for (let i = 0; i < 4; i++) {
                serieairing.push(data.results[i]);
            }
            this.setState({serieToday: serieairing, loaderserieToday: false})
        })

    }

    render(){
        return(
            <div class="container">
                <Header />


                <h2 class="alert alert-primary">Popular movies this week <button class='btn btn-primary'><Link to='/movies/popular'>Ver mas</Link></button> </h2>
                {this.state.loadermoviesPopular ? <p>Cargando...</p> :  <ListaCard tipo='movie' data={this.state.moviesPopular} /> }

                <h2 class="alert alert-primary">Movies now playing <button class='btn btn-primary'><Link to='/movies/now_playing'>Ver mas</Link></button></h2>
                {this.state.loadermoviesNow ? <p>Cargando...</p> :  <ListaCard tipo='movie' data={this.state.moviesNow} /> }

                <h2 class="alert alert-primary">Popular TV shows this week <button class='btn btn-primary'><Link to='/series/popular'>Ver mas</Link></button></h2>
                {this.state.loaderseriePopular ? <p>Cargando...</p> :  <ListaCard tipo='tv' data={this.state.seriePopular} /> }

                <h2 class="alert alert-primary">TV shows airing today <button class='btn btn-primary'><Link to='/series/airing_today'>Ver mas</Link></button></h2>
                {this.state.loaderserieToday ? <p>Cargando...</p> :  <ListaCard tipo='tv' data={this.state.serieToday} /> }
            <Footer/>
            </div>
        )
    }
}

export default Home;