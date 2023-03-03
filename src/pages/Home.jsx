import React from "react";
import { useState, useEffect } from "react";
import InviteForm from "../components/InviteForm/InviteForm";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { Api } from "../components/API/API";

export default function Home() {
  
  const [inviteFormActive, setInviteFormActive] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState('')
  // ЗАКРЫВАЕМ И ОТКРЫВАЕМ ФОРМУ
  const showInviteForm = (e) => {
    e.preventDefault();
    setInviteFormActive(!inviteFormActive);
  };

  //ЗАКРЫВАЕМ ФОРМУ
  const closeInviteForm = (e) => {
    e.preventDefault();
    setInviteFormActive(false);
  };

  //ОТПРАВЛЯЕМ ДАННЫЕ О ПРИГЛАШАЕМОМ МОЛЬЗОВАТЕЛЕ
  const sentInviteData = (e) =>{
    e.preventDefault();
    console.log(12324124314)
    // Api.invite(email, rule, method)
  }

  return (
    <div className="home">
      <Sidebar
        showInviteForm={showInviteForm}
      />
      <Main />
      {inviteFormActive ? <InviteForm closeInviteForm={closeInviteForm} sentInviteData={sentInviteData} /> : null}
    </div>
  );
}
