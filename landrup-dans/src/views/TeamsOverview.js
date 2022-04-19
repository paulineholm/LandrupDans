import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Protected from "../components/Protected";
const TeamsOverviewStyles = styled.main`
  padding: 1.5em;
  color: white;
  h1 {
    color: var(--light-grey);
  }
  p {
    margin-top: 1em;
  }
`;
const TeamsOverview = () => {
  const { token, role } = useContext(TokenContext);
  const { id } = useParams();
  const [teamsView, setTeamsView] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:4000/api/v1/activities/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setTeamsView(response.data);
      setIsLoading(false);
    });
  }, [id, token]);
  return role === "instructor" && id ? (isLoading ?
    <Spinner /> : (
    <TeamsOverviewStyles>
      <h1>{teamsView.name}</h1>
      {teamsView.users.map((user) => (
        <p>
          {user.firstname} {user.lastname}
        </p>
      ))}
    </TeamsOverviewStyles>
  )) : <Protected />;
};

export default TeamsOverview;
