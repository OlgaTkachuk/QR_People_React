import React from "react";

export const Register = () => {

  return (
    <div className="register-form">
      <form>
        <input type="text" placeholder="name" name="name"/>
        <input type="email" placeholder="example@site.com" name="email"/>
        <input type="password" placeholder="password" name="password"/>
        <input type="text" placeholder="Lviv" name="city"/>
        <input type="submit" value="REGISTER"/>
      </form>
    </div>
  );
};
