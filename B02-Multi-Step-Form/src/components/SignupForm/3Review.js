import React from "react";
import { useSignupForm } from "./SignupFormContext";

export default function Review() {
  const { profile, social } = useSignupForm();

  function handleSubmit(e) {
    e.preventDefault();

    // const data = {...profile, ...social};
    // axios.post('url-goes-here', data);

    alert("you are submitting! congrats!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review all your info</h2>

      <p>
        <strong>Name</strong>: {profile.name}
      </p>
      <p>
        <strong>Email</strong>: {profile.email}
      </p>
      <p>
        <strong>Twitter</strong>: {social.twitter}
      </p>
      <p>
        <strong>Facebook</strong>: {social.facebook}
      </p>

      <input type="submit" value="Submit All Info" />
    </form>
  );
}
