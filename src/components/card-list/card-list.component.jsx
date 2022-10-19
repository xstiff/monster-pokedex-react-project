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
                        )
                })}
            </div>
        )
}
}

export default CardList;