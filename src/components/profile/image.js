import React from 'react';

class ProfileImage extends React.Component{
    render() {
        return(
            <div className='container m-auto flex gap-2 items-center justify-center'>
                <img src={"https://pbs.twimg.com/profile_images/1602395023060107264/h0HemeTx_400x400.jpg"} alt="profile" className='w-[10%] md:w-[5%] rounded-full border-2'/>
                <h3 className='font-semibold text-white'><a href="https://open.spotify.com/user/s0dxhmte8s073l121peg9n8nc" target="_blank" rel="noreferrer">Vitor</a></h3>
            </div>
        )
    }
}

export default ProfileImage;