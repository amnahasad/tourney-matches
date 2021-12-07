import React from "react"; 
import Player from "./Player";
// import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

function PlayerList(props) {
//   const playerDataArray = preparePlayerData(props.playerData);
//   const parsedPlayerData = addWinsToPlayers(playerDataArray, props.matchData);
//   const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player gamerTag={props.onePlayer.gamerTag} firstName={props.onePlayer.firstName} lastName={props.onePlayer.lastName} wins={props.onePlayer.wins} />
      
    </section>
  );
}

export default PlayerList;
