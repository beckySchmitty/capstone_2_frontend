import React, {useState, useEffect} from "react";
import { Jumbotron, Button } from 'reactstrap';
import {useSelector} from "react-redux";
import backendAPI from "../API/backendAPI"


// displays current user profile

const Profile = () => {
    const user = useSelector(st => st.currentUser);
    const [watchlist, setWatchlist] = useState(null)

    useEffect(function getWatchlist() {
      async function getData() {
        const resp = await backendAPI.getWatchlist(user.id)
        setWatchlist(JSON.stringify(resp.data.rows))
      }
      getData()
      }, [user]);

    
    return (
        <div>
        <Jumbotron>
          <h1 className="display-3">Hello, {user.username}!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        <div>WATCHLIST {watchlist} HERE</div>
      </div>
    );
}

export default Profile;