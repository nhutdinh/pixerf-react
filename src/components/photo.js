import React from 'react'
import LikeBtn from './like-btn';

class Photo extends React.Component{
    constructor(props){
        super(props);

    }
    render = () => (
        <div className='photo'>
            <LikeBtn liked={this.props.data.liked}></LikeBtn>
        </div>
    )
}
export default Photo