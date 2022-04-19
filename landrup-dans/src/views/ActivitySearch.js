import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Spinner from "../components/Spinner";
const ActivitySearchStyles = styled.main`
  padding: 1.5em;
  color: white;
  .activitiesSearch {
    margin: 1em auto;
    padding: 0.5em;
    width: 100%;
    font-size: 1em;
    text-align: center;
    background: #c4c4c430;
    border: none;
    color: white;
    ::placeholder {
      text-align: right;
    }
  }
  .activitiesWrap {
    padding: 1em 0em 4em 0em;
    margin-top: 0.5em;
  }
  .activityWrap {
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
const ActivitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    <ActivitySearchStyles>
      <h1>Søg</h1>
      <input
        type="text"
        className="activitiesSearch"
        placeholder="🔍"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <ul className="activitiesWrap">
        {activities
          ?.filter((activity) => {
            return activity.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map((activity) => (
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
    </ActivitySearchStyles>
  );
};
export default ActivitySearch;
