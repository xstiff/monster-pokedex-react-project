import { Component } from "react";
import Card from "../card-component/card-component.component";


class CardList extends Component {
    
    render () {
        // console.log('render2')

        const { monsters } = this.props;
        return (
            <div className='cardList'>
                {monsters.map( (e) => {
                    return( 
                        <Card monster={e}/>
                    // <div key={e.id} className="cardElement">
                    //     <img src={`https://robohash.org/${e.id}?set=set2&size=180x180`} alt="monster" className='monster-img'/>
                    //     <h1>{e.name}</h1>
                    //     <h2>{e.email}</h2>
                    //     </div>
                        
                        
                        )
                })}
            </div>
        )
}
}

export default CardList;