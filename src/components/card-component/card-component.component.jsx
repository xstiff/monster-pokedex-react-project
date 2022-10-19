import { Component} from "react";

class Card extends Component {
    render (){

        const _e = this.props.monster; // Monster object

        return (

            <div key={_e.id} className="cardElement">
                        <img src={`https://robohash.org/${_e.id}?set=set2&size=180x180`} alt="monster" className='monster-img'/>
                        <h1>{_e.name}</h1>
                        <h2>{_e.email}</h2>
            </div>

            )
    }

}

export default Card;