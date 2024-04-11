import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, CITIES } from '../../consts';
import { Link } from 'react-router-dom';
import { TCityName } from '../../types/offers';

function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.user.authStatus);

  function setRandomCity(): TCityName {
    const randomNum = Math.floor(Math.random() * CITIES.length);
    return CITIES[randomNum];
  }
  const randomCity = setRandomCity();

  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const passCheck = /^(?=.*\d)(?=.*[a-z])/;
    if (
      emailRef.current !== null &&
      passwordRef.current !== null &&
      passCheck.test(passwordRef.current.value)
    ) {
      dispatch(
        loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Шесть городов. Вход</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="name"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const MemoizedLogin = React.memo(Login);
export default MemoizedLogin;
