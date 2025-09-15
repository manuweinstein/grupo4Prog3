import { Component } from "react";
import './Card.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: "Ver descripcion completa",
            show: false
        }
    }

    componentDidMount() {
        console.log(this.props);

    }
    changeDescr() {
        if (this.state.show == false) {
            this.setState({ show: true, descripcion: "Ocultar descripcion" })
        }
        else {
            this.setState({ show: false, descripcion: "Ver descripcion completa" })
        }
    }
    render() {
        const { data, tipo } = this.props;
        console.log(this.props.data.overview)
        return (
            <article className="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.tipo == 'movie' ? this.props.data.title : this.props.data.name}</h5>
                    <p className={this.state.show == false ? "card-text" : ""}> {this.props.data.overview}</p>
                    <button
                        onClick={() => this.changeDescr()}
                    > {this.state.descripcion} </button>
                    <Link
                        to={`/detalle/${tipo}/${data.id}`}
                        className="btn btn-primary"
                    >
                        Ver más
                    </Link>

                    <Link
                        to="/favoritas"
                        className="btn alert-primary"
                        aria-label="Ver favoritas"
                    >
                        🩶
                    </Link>
                </div>
            </article>
        )
    }
}


export default Card;