import {Component} from "react";
import './Card.css'
import {Link} from "react-router-dom/cjs/react-router-dom.min";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: "Ver descripcion completa",
            show: false,
            esFavorito: false
        }
    }

    componentDidMount(){
        let variableLocal = '';
        if(this.props.tipo == 'movie'){
            variableLocal='peliculasFavoritas'
        } else {
            variableLocal='seriesFavoritas'
        }
        console.log(this.props);
        let favoritosLocalStorage = localStorage.getItem(variableLocal)
        let favoritosParse = JSON.parse(favoritosLocalStorage)
        if (favoritosParse !== null){
            if (favoritosParse.includes(this.props.data.id)) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    changeDescr() {
        if (this.state.show == false) {
            this.setState({ show: true, descripcion: "Ocultar descripcion" })
        }
        else {
            this.setState({ show: false, descripcion: "Ver descripcion completa" })
        }
    }

    agregarAfavoritos(id) {
        let variableLocal = '';
        if(this.props.tipo == 'movie'){
            variableLocal='peliculasFavoritas'
        } else {
            variableLocal='seriesFavoritas'
        }
        console.log(id, 'id desde funcion');
        let favoritos =[]
        let favoritosLocalStorage = localStorage.getItem(variableLocal)
        let favoritosParse = JSON.parse(favoritosLocalStorage)
        
        if(favoritosParse !== null){
            favoritosParse.push(id)
            let favoritosToString = JSON.stringify(favoritosParse)
            localStorage.setItem(variableLocal, favoritosToString)
            this.setState({
                esFavorito: true
            })
        } else {
            console.log(id);
            favoritos.push(id)
            let favoritosToString = JSON.stringify(favoritos)
            localStorage.setItem(variableLocal, favoritosToString)
            this.setState({
                esFavorito: true
            })
        }


    }

    quitarDeFavoritos(id){
        let variableLocal = '';
        if(this.props.tipo == 'movie'){
            variableLocal='peliculasFavoritas'
        } else {
            variableLocal='seriesFavoritas'
        }
        let favoritos =[]
        let favoritosLocalStorage = localStorage.getItem(variableLocal)
        let favoritosParse = JSON.parse(favoritosLocalStorage)
        
        if(favoritosParse !== null){
            favoritosParse = favoritosParse.filter(fav => fav !== id)
            let favoritosToString = JSON.stringify(favoritosParse)
            localStorage.setItem(variableLocal, favoritosToString)
            this.setState({
                esFavorito: false
            })
        } else {
            favoritosParse = favoritosParse.filter(fav => fav !== id)
            let favoritosToString = JSON.stringify(favoritos)
            localStorage.setItem(variableLocal, favoritosToString)
            this.setState({
                esFavorito: false
            })
        }


        console.log(favoritosLocalStorage)
    }

    render() {
        const { data, tipo } = this.props;
        console.log(this.props.data.id)
        return (
            <article className="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.tipo == 'movie' ? this.props.data.title : this.props.data.name}</h5>
                    <p className={this.state.show == false ? "card-text" : ""}> {this.props.data.overview}</p>
                    <button className="btn-des"
                        onClick={() => this.changeDescr()}
                    > {this.state.descripcion} </button>
                    <Link
                        to={`/detalle/${tipo}/${data.id}`}
                        className="btn-vermas"
                    >
                        Ver más
                    </Link>

                    {/*<Link
                        to="/favoritas"
                        className="btn alert-primary"
                        aria-label="Ver favoritas"
                    >
                        
                    </Link> */}
                    <div className="btn-favs">
                        {
                            this.state.esFavorito ?
                            <button onClick={() => this.quitarDeFavoritos(this.props.data.id)}>
                            ♡ Quitar de favoritos
                            </button>
                            :
                            <button onClick={() => this.agregarAfavoritos(this.props.data.id)}> 
                            ♡ Agregar a favoritos
                            </button>
                            
                        }
                    </div>
                    
                </div>
            </article>
        )
    }
}


export default Card;