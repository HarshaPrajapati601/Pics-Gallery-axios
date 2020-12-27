import React from 'react';
import axios from "axios";
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  state={
    images: []
  }
   OnSearchSubmit = async (searchText) => {
    // axios.get('https://api.unsplash.com/search/photos',{
    //   params: {query: searchText} ,
    //   headers: {
    //     Authorization: 'Client-ID Ya9yyzYLimaiz4C9PWUhjjGc3nGePkZ5DpakOtPeubc'
    //   }
    // });
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: searchText},
      headers: {
          Authorization: 'Client-ID Ya9yyzYLimaiz4C9PWUhjjGc3nGePkZ5DpakOtPeubc'
      }
    })
    console.log("res",response.data)
    this.setState({
      images: response.data.results
    })
  }
 
  render(){
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar searchSubmit ={this.OnSearchSubmit}/>
        The Images length is {this.state.images.length}
      </div>
    )
  }
}

export default App;
