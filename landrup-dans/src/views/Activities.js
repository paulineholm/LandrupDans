import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Spinner from "../components/Spinner";
const ActivitiesStyles = styled.main`
  padding: 0em 1.5em 1.5em;
  color: white;
  h1 {
    position: fixed;
    z-index: 1;
    background: var(--deep-plum);
    padding-top: 1em;
    width: 100vw;
  }
  .activitiesWrap {
    padding: 1em 0em 4em 0em;
    margin-top: 0.5em;
  }
  .activityWrap:first-of-type {
    margin-top: 5em;
  }
  .activityWrap {
    margin-top: 2em;
    margin-bottom: 2em;
    border-radius: 0px 25px;
    img {
      border-radius: 25px 25px 0px;
      width: 100%;
      height: 40vh;
    }
  }
  .activityContainer {
    position: relative;
    color: white;
  }
  .activityInfo {
    padding: 1em;
    width: 100%;
    position: absolute;
    bottom: 0.25em;
    left: 0em;
    background: #e1a1e980;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
  }
`;
const Activities = () => {
  const [activities, setActivities] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("http://localhost:4000/api/v1/activities").then((response) => {
      setActivities(response.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
    <ActivitiesStyles>
      <h1>Aktiviteter</h1>
      <ul className="activitiesWrap">
        {activities.map((activity) => (
          <li key={activity.id} className="activityWrap">
            <Link to={`/activitydetail/${activity.id}`}>
              <div className="activityContainer">
                <img src={activity.asset.url} alt={activity.name} />
                <p className="activityInfo">
                  {activity.name}
                  <br />
                  {activity.minAge} - {activity.maxAge} år
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ActivitiesStyles>
  );
};

export default Activities;
