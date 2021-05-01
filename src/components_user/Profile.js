import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import backendAPI from "../API/backendAPI"
import { Redirect } from 'react-router-dom';
import Watchlist from "./Watchlist"
import "../styles/Watchlist.css"


// displays current user profile

const Profile = () => {
    const user = useSelector(st => st.currentUser);
    const [watchlist, setWatchlist] = useState(null);

    useEffect(function getWatchlist() {
      async function getData() {
        const resp = await backendAPI.getWatchlist(user.id)
        setWatchlist(resp.data.rows)
      }
      getData()
      }, [user, removeMovie]);

      if (!user.id) {
        return <Redirect to="/login" />;
      }

    async function removeMovie(user_id, imdb_id) {
      const response = await backendAPI.removeFromWatchlist(user_id, imdb_id);
      console.log(`Removie Movie Resp: ${JSON.stringify(response)}`)
    }
    
    return (

          <div>
              <div>
              <img alt="owl" style={{width: `200px`}} src='https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'></img>
              <h1 className="display-3">Hello, {user.username}!</h1>
              <div className="Watchlist-parent">{watchlist && watchlist.map(m => <Watchlist 
              imdb_id={m.imdb_id} 
              title={m.title} 
              poster={m.poster} 
              plot={m.plot} 
              director={m.director}
              bechdel_rating={m.bechdel_rating} 
              removeMovie={() => removeMovie(user.id, m.imdb_id)}
              key={m.imdb_id}
              />)}</div>

              </div> 
          </div>

    );
}

export default Profile;

