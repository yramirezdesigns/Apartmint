import React, { Component } from "react";
import ApartmentCard from "./components/ApartmentCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import apartments from "./apartment.json";
import "./ApartmentPage.css";
import topNavBar from "./components/topNavBar/topNavBar";


class App extends Component {
  state = {
    apartments
  };

  removeApartment = id => {
    const apartments = this.state.apartments.filter(
      apartment => apartment.id !== id
    );
    this.setState({ apartments });
  };

  render() {
    return (
      <topNavBar />
      <Wrapper>
        <Title>Apartment Listing</Title>
        {this.state.apartments.map(apartment => (
          <ApartmentCard
            removeApartment={this.removeApartment}
            id={apartment.id}
            key={apartment.id}
            name={apartment.name}
            image={apartment.image}
            rooms={apartment.rooms}
            bath={apartment.bath}
            location={apartment.location}
            city={apartment.city}
            state={apartment.state}
            rent={apartment.rent}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
