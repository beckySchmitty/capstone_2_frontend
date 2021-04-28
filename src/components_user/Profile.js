import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import backendAPI from "../API/backendAPI"
import { Redirect } from 'react-router-dom';
import Watchlist from "./Watchlist"
import "../styles/Watchlist.css"


// displays current user profile

const Profile = () => {
    const user = useSelector(st => st.currentUser);
    const [watchlist, setWatchlist] = useState(null)

    useEffect(function getWatchlist() {
      async function getData() {
        const resp = await backendAPI.getWatchlist(user.id)
        setWatchlist(resp.data.rows)
      }
      getData()
      }, [user]);

      if (!user.id) {
        return <Redirect to="/login" />;
      }

    
    return (
        <div>
          <img src={user.img_url}></img>
          <h1 className="display-3">Hello, {user.username}!</h1>
          <hr></hr>
          <div className="Watchlist-parent">{watchlist && watchlist.map(m => <Watchlist 
          imdb_id={m.imdb_id} 
          title={m.title} 
          poster={m.poster} 
          plot={m.plot} 
          director={m.director}
          bechdel_rating={m.bechdel_rating} 
          />)}</div>

      </div>
    );
}

export default Profile;