import React, { Component } from 'react';
import ButtonComp from "./buttonComponent";
import "../App.css"
export default class AppComp extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[1,2,3]
        }
    }

    render() {
        const posts = () => {
              return (
                <div className="posts-div" style={{ width: '100%', maxWidth: 360 }}>
                  {this.state.posts.map((post) => (
                    <ButtonComp key={`post_${post.id}`}/>
                  ))}
                  <br></br>
                </div>
              )
                  
                }
        return (
            <div>
               {posts()}
            </div>
        )
    }
}
