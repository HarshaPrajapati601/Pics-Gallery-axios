import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props)=> {
    const ImagesRecieved = props.totalImages.map(imgObj=>{
            return <ImageCard key={imgObj.id} image={imgObj}/>;
    })
    return(
        <div className="image-list"> {ImagesRecieved}</div>
    )
    
}
export default ImageList;