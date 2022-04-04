import React from 'react';
import classes from  './Profile.module.css'


const Profile = () =>{
    return (
        <div className={classes.profile}>

        <div>
        <img src='https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg' alt='image'/>
        </div>
     <div className={classes.item}>
        <div >
          Ava + discription
        </div>

        <div>
          My posts
        </div>

        <div>
          New post
        </div>

        <div>
          post 1
        </div>

        <div>
          post 2
        </div>
        </div>
      </div>
    )
}

export default Profile