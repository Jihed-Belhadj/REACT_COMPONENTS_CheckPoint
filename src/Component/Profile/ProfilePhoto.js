import React from 'react'
import me from '../Images/me.jpg'

function ProfilePhoto() {
    return (
        <div>
            <img src={me} style={{padding:"10px", width: "360px", height: "208, 69px", border:"5px solid black"}} alt="ma photo" />
        </div>
    )
}

export default ProfilePhoto
