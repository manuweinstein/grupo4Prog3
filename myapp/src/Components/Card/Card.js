import { Component } from "react";
import './Card.css'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        descripcion: "Ver descripcion completa",
        show:false
        }
    }

    componentDidMount() {
        console.log(this.props);
        
    }
    changeDescr(){
    if(this.state.show==false){
        this.setState({show:true,descripcion:"Ocultar descripcion"})
    }
    else{
        this.setState({show:false,descripcion:"Ver descripcion completa"})
    }
    }
    render() {
        const {data, tipo} = this.props;
        console.log(this.props.data.overview)
        return (
            <article class="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top"alt="..." />
                    <div class="cardBody">
                        <h5 class="card-title">{ this.props.tipo == 'movie' ? this.props.data.title : this.props.data.name}</h5>
                        <p class={this.state.show ==false? "card-text" : ""}> {this.props.data.overview}</p>
                        <button 
                        onClick={()=> this.changeDescr()}
                        > {this.state.descripcion} </button>
                        <a href={`/detalle/${tipo}/${data.id}`} className="btn btn-primary">Ver más</a>

                        <a href="" class="btn alert-primary">🩶</a>
                    </div>
            </article>
        )
    }
}


export default Card;