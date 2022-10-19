import { Component } from "react";

class SearchBox extends Component {
    render() {
        return (
            <div className={`${this.props.class}-container`}>
                <input 
                type="search"
                placeholder={this.props.placeHolder}
                className={this.props.class}
                onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;