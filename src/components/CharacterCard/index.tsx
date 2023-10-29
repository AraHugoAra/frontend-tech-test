import React from "react";
import { CharacterType } from "../../api/types";

interface CharacterCardPropsType {
  character: CharacterType;
}

const CharacterCard = ({ character }: CharacterCardPropsType) => (
  <div className="character-card">
    <div className="character-card__image-container">
      <img
        alt={`${character.name}'s thumbnail`}
        src={character?.thumbnail?.path + "." + character?.thumbnail?.extension}
      />
    </div>
    <div className="character-card__text-section">
      <h2>{character.name}</h2>
      <p>
        {character.description ||
          "This character description has yet to come !"}
      </p>
      <ul className="character-card__text-section--numbers-section">
        <li>#comics: {character?.comics?.available}</li>
        <li>#series: {character?.series?.available}</li>
        <li>#stories: {character?.stories?.available}</li>
      </ul>
    </div>
  </div>
);

export default CharacterCard;
