// Pokemon.ts

// Define a Pokemon interface
// interface Pokemon {
//   name: string;
//   type: string;
//   hp: number;
//   attack: number;
//   defense: number;
//   speed: number;
// }

// // Utility function to calculate damage
// function calculateDamage(attacker: Pokemon, defender: Pokemon): number {
//   const damage = (attacker.attack - defender.defense); // Simplified damage calculation
//   return Math.max(damage, 0);
// }

// // Function to simulate a battle turn
// function performBattleTurn(attacker: Pokemon, defender: Pokemon): number {
//   const damage = calculateDamage(attacker, defender);
//   defender.hp -= damage;
//   return damage;
// }

// export function simulateBattle(pokemon1: Pokemon, pokemon2: Pokemon): { winner: Pokemon | null; battleLog: string[] } {

//   let pok1 = { ...pokemon1 }

//   let pok2 = { ...pokemon2 }

//   console.log(pokemon1, pokemon2)

//   let winner: Pokemon | null = null;
//   const battleLog: string[] = [];
//   // console.log(pokemon1, pokemon2)
//   while (pok1.hp > 0 && pok2.hp > 0) {
//     // Pokemon 1 attacks
//     const damage1 = performBattleTurn(pok1, pok2);
//     battleLog.push(`${pok1.name} attacks for ${damage1} damage.`);

//     if (pok2.hp <= 0) {
//       winner = pok1;
//       break;
//     }

//     // Pokemon 2 attacks
//     const damage2 = performBattleTurn(pok2, pok1);
//     battleLog.push(`${pok2.name} attacks for ${damage2} damage.`);

//     // Check if Pokemon 1 fainted
//     if (pok1.hp <= 0) {
//       winner = pok2;
//       break;
//     }
//   }

//   console.log(pok1, pok2)


//   return { winner, battleLog };
// }

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
  pokemon.defense -= subBy; // You can adjust the amount as needed
}


export function simulateBattle(pok1: Pokemon, pok2: Pokemon): any {
  let winner: Pokemon | null = null;
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
      battleLog.push(`${pokemon1.name} fainted.`);
      break;
    }
  }

  return { winner, battleLog }
}