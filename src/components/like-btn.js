import React from 'react';

class LikeBtn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            liked: props.liked
        } 
    }

    onClick = () =>{
        if(this.props.onClick) this.props.onClick(!this.state.liked)
        this.setState({
            liked: !this.state.liked
        })
    }
    render = () => (
        <div onClick={this.onClick}>{this.state.liked ? "Liked" : "Like"}</div>
    )
}
export default LikeBtn;
