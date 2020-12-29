import React from 'react';
import Unsplash from '../api/Unsplash';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state={
    images: []
  }
   OnSearchSubmit = async (searchText) => {
    const response = await Unsplash.get('search/photos', {
      params: {query: searchText}
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
          <ImageList totalImages={this.state.images}/>
      </div>
    )
  }
}

export default App;
