import React from "react";
import styles from "./RegistrationForm.module.css";
import logoSvg from "../../assets/img/logo.svg";
import passwordIconShow from "../../assets/form-images/show-password.svg";
import passwordIconHide from "../../assets/form-images/hide-password.svg";
import { useState } from "react";

function RegistrationForm(props) {


    const [mainPasswordVisibility, setMainPasswordVisibility] = useState(true)
    const [additionalPasswordVisibility, setAdditionalPasswordVisibility] = useState(true)

    const hidePassword = (param) => {
     param === "first" ?   setMainPasswordVisibility(!mainPasswordVisibility) : setAdditionalPasswordVisibility(!additionalPasswordVisibility)
    }


  return (
    <div className={styles.RegistrationForm}>
      <div className={styles.formWrapper}>
        <div className={styles.logoWrapper}>
          <img alt="logo" src={logoSvg} className={styles.logo} />
        </div>
        <div className={styles.formArea}>
          <h1 className={styles.header}>Регистрация</h1>
          <form className={styles.form}>
            <div className={styles.textInputWrapper}>
              <label form="inputName" className={styles.inputLabel}>
                Имя
              </label>
              <input type="text" id="inputName" className={styles.textInput} />
            </div>
            <div className={styles.textInputWrapper}>
              <label for="inputPassword" className={styles.inputLabel}>
                Пароль
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  type={mainPasswordVisibility ? "password" : "text"}
                  id="inputPassword"
                  className={styles.passwordInput}
                />
                <img
                  alt="hidePassword"
                  src={mainPasswordVisibility ? passwordIconShow : passwordIconHide}
                  className={styles.passwordIcon}
                  onClick={(e) => hidePassword("first")}
                />
              </div>
            </div>
            <div className={styles.textInputWrapper}>
              <label for="repeatInputPassword" className={styles.inputLabel}>
                Повторите пароль
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  type={ additionalPasswordVisibility ? "password" : "text"}
                  id="repeatInputPassword"
                  className={styles.passwordInput}
                />
                 <img
                  alt="hidePassword"
                  src={ additionalPasswordVisibility ? passwordIconShow : passwordIconHide}
                  className={styles.passwordIcon}
                  onClick={(e) => hidePassword("second")}
                />
              </div>
            </div>
            <div className={styles.checkboxInputWrapper}>
              <input type="checkbox" className={styles.checkboxInput} />
              <label className={styles.inputLabel}>
                Я даю согласие на обработку персональных данных
              </label>
            </div>

            <button className={styles.button}>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
