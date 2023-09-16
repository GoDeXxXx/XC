import React from "react";
import "./Profile.css";

const Content = () => {
    return(
        <div className="content">
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" height="200px" width="900px"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>new post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    )
}

export default Content;