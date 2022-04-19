import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Protected from "../components/Protected";
import Spinner from "../components/Spinner";
// import Spinner from "../components/Spinner";
const CalendarStyles = styled.main`
  padding: 1.5em;
  h1 {
    color: white;
  }
  a {
    color: black;
  }
  .activityWrap {
    background: var(--light-grey);
    margin-top: 1.5em;
    padding: 1em;
    border-radius: 10px;
    text-transform: capitalize;
  }
`;
const Calendar = () => {
  const { token, userId, role } = useContext(TokenContext);
  const [calendars, setCalendars] = useState();
  const [calInstructor, setCalInstructor] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:4000/api/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setCalendars(response.data.activities);
      setIsLoading(false);
    });
  }, [token, userId]);
  useEffect(() => {
    axios(`http://localhost:4000/api/v1/activities`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setCalInstructor(response.data);
      setIsLoading(false);
    });
  }, [token]);
  return token ?
  (isLoading ? <Spinner /> : (
      <CalendarStyles>
        <h1>Aktiviteter</h1>
        <ul className="activitiesWrap">
          {calendars && role === "default"
            ? calendars?.map((calendar) => (
                <Link key={calendar.id} to={`/activitydetail/${calendar.id}`}>
                  <li className="activityWrap">
                    <h2>{calendar.name}</h2>
                    <p>
                      {calendar.weekday} {calendar.time}
                    </p>
                  </li>
                </Link>
              ))
            : null}
          {calInstructor && role === "instructor"
            ? calInstructor
                ?.filter((calendar) => calendar.instructorId === userId)
                .map((calendar) => (
                  <Link key={calendar.id} to={`/teamsoverview/${calendar.id}`}>
                    <li className="activityWrap">
                      <h2>{calendar.name}</h2>
                      <p>{calendar.instructorId}</p>
                      <p>
                        {calendar.weekday} {calendar.time}
                      </p>
                    </li>
                  </Link>
                ))
            : null}
          {/* kode til dokumentationen {calendars && calInstructor && role === "default" ? calendars?.map(calendar =>
                <Link key={calendar.id} to={`/activitydetail/${calendar.id}`}>
                    <li className="activityWrap">
                        <h2>{calendar.name}</h2>
                        <p>{calendar.weekday} {calendar.time}</p>
                    </li>
                </Link>
            ) : calInstructor?.filter(calendar => calendar.instructorId === userId).map(calendar =>
                <Link key={calendar.id} to={`/teamsoverview/${calendar.id}`}>
                <li className="activityWrap">
                    <h2>{calendar.name}</h2>
                    <p>{calendar.instructorId}</p>
                    <p>{calendar.weekday} {calendar.time}</p>
                </li>
            </Link>
            )} */}
        </ul>
      </CalendarStyles>
    )
  ) : <Protected />;
};
export default Calendar;
