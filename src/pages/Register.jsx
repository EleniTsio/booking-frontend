import React from "react";
import { useState } from "react";

function Register() {
  return (
    <div className="registrationForm">
      <h3>Εγγραφή</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="myemail@example.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </form>
    </div>
  );
}
