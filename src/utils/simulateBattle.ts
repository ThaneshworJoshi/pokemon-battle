import { saveDataToLocalStorage } from "./localStorageUtils";

interface Pokemon {
  name: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

function calculateDamage(attacker: Pokemon, defender: Pokemon): number {
  // Calculate damage based on attacker's attack and defender's defense
  const damage = (attacker.attack - defender.defense);
  // Ensure damage is at least 1
  return Math.max(1, Math.round(damage));
}
function applyDefenseReduction(pokemon: Pokemon, subBy: number): void {
  // Reduce the defense stat of the defending Pokémon
  pokemon.defense -= subBy;
}

/**
 * Simulates a battle between two Pokémon.
 *
 * @param {Pokemon} pok1 - The first Pokémon in the battle.
 * @param {Pokemon} pok2 - The second Pokémon in the battle.
 * @returns {object} An object containing the winner , loser and battle log.
 */
export function simulateBattle(pok1: Pokemon, pok2: Pokemon): any {
  let winner: Pokemon | null = null;
  let loser: Pokemon | null = null;
  let rounds = 0;
  let pokemon1: Pokemon;
  let pokemon2: Pokemon;
  const battleLog: {}[] = [];


  if (pok1.speed > pok2.speed) {

    pokemon1 = { ...pok1 }
    pokemon2 = { ...pok2 }
  } else {
    pokemon1 = { ...pok2 }
    pokemon2 = { ...pok1 }
  }

  // Simulate the battle until one of the Pokémon runs out of HP
  while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    rounds++;

    // Pokemon 1 attacks
    const damage1 = calculateDamage(pokemon1, pokemon2);
    pokemon2.hp -= damage1;
    applyDefenseReduction(pokemon2, pokemon1.attack); // Reduce defense of defending Pokemon
    battleLog.push({ attacker: pokemon1.name, defender: pokemon2.name, damage: damage1 });
    if (pokemon2.hp <= 0) {
      winner = pokemon1;
      loser = pokemon2;
      battleLog.push(`${pokemon2.name} fainted.`);
      break;
    }

    // Pokemon 2 attacks
    const damage2 = calculateDamage(pokemon2, pokemon1);

    pokemon1.hp -= damage2;
    applyDefenseReduction(pokemon1, pokemon2.attack); // Reduce defense of defending Pokemon
    battleLog.push({ attacker: pokemon2.name, defender: pokemon1.name, damage: damage2 });
    if (pokemon1.hp <= 0) {
      winner = pokemon2;
      loser = pokemon1;
      battleLog.push(`${pokemon1.name} fainted.`);
      break;
    }
  }
  return { winner, loser, battleLog }
}