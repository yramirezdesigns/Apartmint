import React, { Component } from "react";
import ProfileCard from "./components/profileCard/index";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";
import ProfileInfo from "./profileInfo.json";
import "./App.css";

class App extends Component {
  state = {
    ProfileInfo
  };

  render() {
    return (
      <Wrapper>
        <Title>Your Profile</Title>
        {/* Must chang the code to fit just the curect user */}
        {this.state.ProfileInfo.map(profile => (
          <ProfileCard
            id={profile.id}
            key={profile.id}
            fName={profile.fName}
            lName={profile.lName}
            email={profile.email}
            Num={profile.Num}
            employer={profile.employer}
            jobNum={profile.jobNum}
            contact={profile.contact}
            title={profile.title}
            income={profile.income}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
