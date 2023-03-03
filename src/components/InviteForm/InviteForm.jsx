import React from "react";
import styles from "./InviteForm.module.css";


function InviteForm(props) {
  return (
    <div className={styles.wrapper} >
      <form className={styles.inviteForm}>
        <header className={styles.Header}>
          Пригласить участников в рабочее пространство
        </header>

        <div className={styles.inputWrapper}>
          <h4 className={styles.label}>Введите адрес(а) электронной почты: </h4>
          <input type="text" className={styles.input}></input>
        </div>
        <div className={styles.rolesWrapper}>
          <h4 className={styles.label}>Роль пользователя</h4>
          <select id="rolesSelector" className={styles.rolesSelector}>
            <option>Администратор</option>
            <option>Участник</option>
          </select>
        </div>
        <button className={styles.sentButton} onClick={(e)=>props.sentInviteData(e)}>Отправить</button>
        <button className={styles.closeButton} onClick={(e)=>props.closeInviteForm(e)}></button>
      </form>
    </div>
  );
}

export default InviteForm;
