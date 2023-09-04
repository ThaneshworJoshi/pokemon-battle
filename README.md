# Pokemon Battle
Task To Be Done:
<br/>
   1. Slow down battle and add animation according to battle log
   2. Show health progress bar
   3. Add Search feature in pokedex page
   4. Add about page
   5.  Responsive Design

# Frontend Architecture Document:

## Product

    The product is who would win pokemon battle game 

## Technologies

    1. Typescript: As the primary language
    2. Jest: For testing React component
    3. Prettier: For code formatting
    4. RTK: For state management
    5. Axios: For API requests
    


## Project installation

      Navigate to the project directory:** Open a terminal and navigate to your project directory where the "package.json" file is located.

### Frontend:

1.  Install project dependency:

        yarn install

2.  Start the development server:

        yarn start

<br>

### Pokemon Battle Algorithm

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
  
    pokemon2.health -= damage1
    // Reduce defense of defending Pokemon
    print "Pokemon 1 attacks! Pokemon 2 loses " + damage1 + " HP."

    // Check if Pokémon 2 fainted
    if pokemon2.health <= 0 {
        print "Pokemon 2 fainted. Pokemon 1 wins!"
        break
    }

    // Pokémon 2's turn
    damage2 = pokemon2.attack - pokemon1.defense

    pokemon1.health -= damage2
    // Reduce defense of defending Pokemon
    print "Pokemon 2 attacks! Pokemon 1 loses " + damage2 + " HP."

    // Check if Pokémon 1 fainted
    if pokemon1.health <= 0 {
        print "Pokemon 1 fainted. Pokemon 2 wins!"
        break
    }
    }

    // End of battle
