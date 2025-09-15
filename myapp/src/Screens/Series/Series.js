import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import Footer from "../../Components/Footer/Footer";

let apiKey = '5ea8a9872dea100ef148d0562094a5b4'

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            loader: true,
            page: 1,
            inputValue: '',
            seriesFiltradas: []
        }
    }

    componentDidMount() {
        console.log(this.props);

        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.tipo}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ series: data.results, loader: false })
            })
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.tipo}?api_key=${apiKey}&page=${this.state.page + 1}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ series: this.state.series.concat(data.results), page: this.state.page + 1 })
            })
    }

    manejarInput = (e) => {
        console.log(e);

        this.setState({ inputValue: e.target.value })

        let seriesFiltradas = this.state.series.filter(unaSerie => {
            return unaSerie.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        console.log(seriesFiltradas);


        this.setState({ seriesFiltradas: seriesFiltradas })
    }
    render() {
        return (
            <div className="container">
                <Header />
                <input onChange={this.manejarInput} type="text" className="" name="searchData" placeholder="Buscar..." value={this.state.inputValue} />
                <h2 className="alert alert-primary"> {this.props.match.params.tipo == 'popular' ? 'Popular TV shows this week' : 'TV shows airing today'} </h2>
                {this.state.loader ? <p>Cargando...</p> : <ListaCard data={this.state.inputValue.length == 0 ? this.state.series : this.state.seriesFiltradas} tipo='tv' />}
                
                <button onClick={() => this.cargarMas()} className='btn btn-primary'>Cargar más</button>

                <Footer />
            </div>
        )
    }
}

export default Series;