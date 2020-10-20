import React from 'react';
import './../App.css';
import './../null.css';

const Profile = () => {
    return (
<div className="content">
          <div>
            <img className="fon" src="https://im0-tub-ru.yandex.net/i?id=a8f059ca819afbe3ff5356a98882b49b&n=13&exp=1"></img>
          </div>
          <div>
            avatar + description
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div>
              <div>
                Post1
              </div>
              <div>
                Post2
              </div>
            </div>
          </div>
        </div>
    );
}

export default Profile;