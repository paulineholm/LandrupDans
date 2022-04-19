import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
const ActivityDetailStyles = styled.main`
  color: white;
  .activityOverlay {
    position: relative;
  }
  .activityImg {
    height: 50vh;
    width: 100vw;
  }
  .activityBtn {
    color: white;
    padding: 1.5em 0;
    width: 60vw;
    border: none;
    border-radius: 10px;
    background: var(--deep-plum);
    text-align: center;
    position: absolute;
    bottom: 1.5em;
    right: 1.5em;
    cursor: grab;
  }
  .activityInfo {
    padding: 1em 1.5em;
  }
  .activityDesc {
    padding: 1em 0;
  }
`;
const ActivityDetail = () => {
  const { role, userId, token } = useContext(TokenContext);
  const { id } = useParams();
  const [activity, setActivity] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:4000/api/v1/activities/${id}`).then((response) => {
      setActivity(response.data);
      setIsLoading(false);
    });
  }, [id]);
  const [/* signIn, */ setSignIn] = useState();
  /* activity && activity.users.find(member => member.id === userId) ? "false" : "true" forsøg på at sætte state op til true eller false */
  const signUserIn = () => {
    axios
      .post(
        `http://localhost:4000/api/v1/users/${userId}/activities/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setSignIn(response.data);
        setSignIn(true);
      });
  };
  const [/* signOut, */ setSignOut] = useState();
  const signUserOut = () => {
    axios
      .delete(`http://localhost:4000/api/v1/users/${userId}/activities/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSignOut(response.data);
        setSignOut(true);
      });
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <ActivityDetailStyles>
      <div className="activityOverlay">
        <img
          src={activity.asset.url}
          alt={activity.name}
          className="activityImg"
        />
        {token &&
        role === "default" &&
        activity.users.find((member) => member.id !== userId) ? (
          <button className="activityBtn" onClick={signUserIn}>
            Tilmeld
          </button>
        ) : null}
        {/* kun role not token, prøv at gøre det i en conditional sætning! */}
        {token &&
        role === "default" &&
        activity.users.find((member) => member.id === userId) ? (
          <button className="activityBtn" onClick={signUserOut}>
            Forlad
          </button>
        ) : null}
        {/* kode til dokumentation {token && role === "default" && activity.users.find(user => user.id === userId) === undefined ? <button className="activityBtn">Tilmeld</button> : <button className="activityBtn">Forlad</button>} */}
      </div>
      <article className="activityInfo">
        <h2>{activity.name}</h2>
        <p>
          {activity.minAge} - {activity.maxAge} år
        </p>
        <p className="activityDesc">{activity.description}</p>
      </article>
    </ActivityDetailStyles>
  );
};
export default ActivityDetail;
