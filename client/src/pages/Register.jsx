import React, { useState } from "react";
import "../styles/_register.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../http/api";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/customers", data);
      if (response.status === 200) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    } catch (error) {
      console.error("Помилка при реєстрації:", error);
      setIsRegistered(false);
    }
    console.log(data);
  };


  const password = watch("password", "");

  return (
    <div>
      <Link to="/final_project/">
        <button type="button" className="button-to-main">
          Назад на головну
        </button>
      </Link>

      <div className="container">
        {isRegistered ? (
          <div>
            <h1 className="success_register--h1">Дякую за реєстрацію</h1>
            <Link to="/delivery">
              <button type="button" className="success_register--button">
                Увійти
              </button>
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form"
            autoComplete="off"
          >
            <h1 className="registration-h1">Реєстрація</h1>
            <div>
              <input
                type="text"
                placeholder="Ім'я"
                className="registration-input"
                {...register("firstName", {
                  required: "*Це поле обовязкове"
                })}
              />
              {errors.firstName && (
                <span className="register-span">{errors.firstName.message}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Прізвище"
                className="registration-input"
                {...register("lastName", {
                  required: "*Це поле обовязкове"
                })}
              />
              {errors.lastName && (
                <span className="register-span">{errors.lastName.message}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Ім'я користувача"
                className="registration-input"
                {...register("login", {
                  required: "*Це поле обовязкове"
                })}
              />
              {errors.login && (
                <span className="register-span">{errors.login.message}</span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="registration-input"
                {...register("email", {
                  required: "*Це поле обовязкове",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неправильний формат Email"
                  }
                })}
              />
              {errors.email && (
                <span className="register-span">{errors.email.message}</span>
              )}
            </div>

            <div>
              <input
                placeholder="Пароль"
                type="password"
                {...register("password", {
                  required: "*Це поле обовязкове",
                  minLength: {
                    value: 8,
                    message: "Пароль повинен містити принаймні 8 символів"
                  }
                })}
                className="registration-input"
              />
              {errors.password && (
                <span className="register-span">{errors.password.message}</span>
              )}
            </div>


            <button type="submit" className="registration-button">
              Реєстрація
            </button>

            <div className="footer-form">
              <p className="footer-form__text">Маєш аккаунт?</p>
              <Link to="/final_project/login">
                <p className="footer-form__text">Увійти</p>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;