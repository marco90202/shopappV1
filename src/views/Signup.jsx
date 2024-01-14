import { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import axiosClient from "../utils/axios-client";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmationRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("process", process.env);
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordconfirmationRef.current.value,
    };
    axiosClient
      .post("/signup", payload)
      .then((data) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Crea una cuenta gratis</h1>
          <input ref={nameRef} type="text" placeholder="Nombre completo" />
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input
            ref={passwordconfirmationRef}
            type="password"
            placeholder="Confirmar password"
          />
          <button className="btn btn-block">Crear cuenta</button>
          <p className="message">
            Ya registrado ? <Link to="/login">Ir a login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
