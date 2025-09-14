import { Component } from "react";
import './Card.css'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props);
        
    }

    render() {
        const {data, tipo} = this.props;
        return (
            <article class="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top"alt="..." />
                    <div class="cardBody">
                        <h5 class="card-title">{ this.props.tipo == 'movie' ? this.props.data.title : this.props.data.name}</h5>
                        <p class="card-text">{this.props.data.overview}</p>
                        <a href={`/detalle/${tipo}/${data.id}`} className="btn btn-primary">Ver más</a>

                        <a href="" class="btn alert-primary">🩶</a>
                    </div>
            </article>
        )
    }
}

export default Card;