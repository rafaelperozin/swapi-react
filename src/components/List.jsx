import React, { Component } from 'react';

class List extends Component {
  render() {
    // Get List property
    const characters = this.props.characters;

    return (
      <div className="chars">
        {
          characters.map((char) => {

            return (
              <div className="chars__char" key={char.url}>
                <h2 className="chars__char-name">{char.name}</h2>
                <p className="chars__char-info">
                  <span className="global__bold">Height:</span> {char.height}</p>
                <p className="chars__char-info">
                  <span className="global__bold">Hair Colour:</span> {char.hair_color}</p>
                <p className="chars__char-info">
                  <span className="global__bold">Eye Colour: </span>{char.eye_color}</p>
                <p className="chars__char-info">
                  <span className="global__bold">Skin Colour:</span> {char.skin_color}</p>
                <p className="chars__char-info">
                  <span className="global__bold">Birth Year:</span> {char.birth_year}</p>
                <p className="chars__char-info">
                  <span className="global__bold">Gender:</span> {char.gender}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default List;
