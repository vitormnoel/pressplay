import React from 'react';

class ProfileImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: ""
        }
    }

    profile() {
        this.props.onLoad(this.props.img)
    }

    render() {
        return(
            <div>
                <img src={this.profile} alt="profile" />
            </div>
        )
    }
}

export default ProfileImage;