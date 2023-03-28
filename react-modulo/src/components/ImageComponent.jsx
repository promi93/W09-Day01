// Classe come Funzione

import { Component } from 'react'



class Img extends Component {
    render() {
        return <img src={this.props.image} alt="IMMAGINE" />
    }
}

export default Img