import React, { Component } from "react";
import Card from "../Card/Card";
import './ListaCard.css'



class ListaCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
       // console.log(this.props)
    }

    render(){
        return(
            <section class="row cards" id="movies">
                {this.props.data.map((unItem, idx) => <Card tipo={this.props.tipo} key={idx} data={unItem} />)}


            </section>
        )
    }
}

export default ListaCard;