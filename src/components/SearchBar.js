import React from 'react';

class SearchBar extends React.Component{
    state={
        term:''
    }
    // OnInputChange(event){
    //     console.log("user I/P", event.target.value);
    // }
    OnFormSubmit = (event)=>{
        event.preventDefault();

        this.props.searchSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.OnFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(event)=>this.setState({term: event.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;