import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import coverImg from "../assets/splash-image.jpg";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
const LoginStyles = styled.main`
  background-image: url(${coverImg});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: white;
  .formBackground {
    width: 100vw;
    height: 90vh;
    background: #5e2e5370;
    transform: skewY(320deg);
  }
  .loginWrap {
    position: absolute;
    top: 35vh;
    h1 {
      margin-left: 10vw;
    }
  }
  .formBox {
    text-align: center;
  }
  .errorMsg{
    padding-top:0.2em;
    color:var(--dirty-pink);
  }
  .loginInput {
    padding: 1em;
    width: 80vw;
    margin: 0.5em 0;
  }
  .loginCheckbox {
    padding: 0.5em;
  }
  .submitBtn {
    width: 60vw;
    padding: 1.5em 0;
    border: none;
    border-radius: 10px;
    background: var(--deep-plum);
    text-align: center;
    margin-left: 20vw;
    margin-right: 20vw;
    color: white;
  }
`;

const schema = yup.object().shape({
  username: yup.string().required("Brugernavn påkrævet"),
  password: yup.string().required("Password påkrævet!"),
})

const Login = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });
  const { setToken, setUserId, setRole } = useContext(TokenContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:4000/auth/token", data).then((response) => {
      setToken(response.data.token);
      setUserId(response.data.userId);
      setRole(response.data.role);
      Cookies.set("token", response.data.token, {
        sameSite: "Strict",
      });
      Cookies.set("userId", response.data.userId, {
        sameSite: "Strict",
      });
      Cookies.set("role", response.data.role, {
        sameSite: "Strict",
      });
      if (data.keep) {
        Cookies.set("user", data.username, {
          sameSite: "Strict",
          expires: 30,
        });
        Cookies.set("pass", data.username, {
          sameSite: "Strict",
          expires: 30,
        });
      }
      navigate("/calendar");
    });
  };

  return (
    <LoginStyles>
      <div className="formBackground" />
      <div className="loginWrap">
        <h1>Log Ind</h1>
        <div className="formBox">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="brugernavn"
              className="loginInput"
              {...register("username")}
            />
            <p className="errorMsg">{errors.username?.message}</p>
            <input
              type="password"
              placeholder="adgangskode"
              className="loginInput"
              {...register("password")}
            />
            <p className="errorMsg">{errors.password?.message}</p>
            <div className="loginCheckbox">
              <input type="checkbox" {...register("remember")} />
              <label htmlFor="remember">Husk mig</label>
            </div>
            <button type="submit" className="submitBtn">
              Log ind
            </button>
          </form>
        </div>
      </div>
    </LoginStyles>
  );
};

export default Login;
