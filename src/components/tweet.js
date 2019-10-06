import React,{Component}  from 'react'
import like from '../like.svg'
import api from '../services/api'
import  './Tweet.css'
export default  class tweet extends Component{
    handleLike=async()=>
    {
        const {_id} =this.props.tweet
        await api.post(`likes/${_id}`)
    }
    render()
     {
        const {tweet}=this.props
        return(
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike}>
                    <img src={like} alt="Like" />
                    {tweet.likes}
                </button>
            </li>
        )
     }
 }