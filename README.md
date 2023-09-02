# Pokemon Battle


### Pokemon Battle Pseudocode

    // Define two Pokémon and their attributes
    pokemon1 = {
    name: "Pikachu",
    type: "Electric",
    health: 100,
    attack: 20,
    defense: 10
    speed: 100
    }

    pokemon2 = {
    name: "Charizard",
    type: "Fire",
    health: 120,
    attack: 25,
    defense: 15
    speed: 90
    }

    Step 1: Check the speed of pokemon for starting attack

    if pokemon1.speed > pokemon2.speed 
        Pokemon1 starts attack

    while pokemon1.health > 0 and pokemon2.health > 0 {
    // Pokémon 1's turn

    damage1 = pokemon1.attack - pokemon2.defense
    if damage1 < 0 {
        damage1 = 0
    }
    pokemon2.health -= damage1

    print "Pokemon 1 attacks! Pokemon 2 loses " + damage1 + " HP."

    // Check if Pokémon 2 fainted
    if pokemon2.health <= 0 {
        print "Pokemon 2 fainted. Pokemon 1 wins!"
        break
    }

    // Pokémon 2's turn
    damage2 = pokemon2.attack - pokemon1.defense
    if damage2 < 0 {
        damage2 = 0
    }
    pokemon1.health -= damage2
    print "Pokemon 2 attacks! Pokemon 1 loses " + damage2 + " HP."

    // Check if Pokémon 1 fainted
    if pokemon1.health <= 0 {
        print "Pokemon 1 fainted. Pokemon 2 wins!"
        break
    }
    }

    // End of battle
