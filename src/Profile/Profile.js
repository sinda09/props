import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(`I m ${props.fullName}`);
  return (
    <>
      <img src={props.src} alt="" />
      {props.children}
      <h2>{props.fullName}</h2>
      <h5>I am a {props.profession}</h5>
      <p> {props.bio}</p>
      <button onClick={() => props.handleName(`I m ${props.fullName} `)}>
        Click Me
      </button>
    </>
  );
};

Profile.defaultProps = {
  fullName: "Sinda Brahem",
  profession: " PhD studies in Physics",
  bio: "Physics",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};

export default Profile;
