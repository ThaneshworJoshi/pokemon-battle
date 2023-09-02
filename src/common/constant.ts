export const externalApiEndpoints = {
  baseUrl: 'https://pokeapi.co/api/v2',
  pokemon: {
    base: '/pokemon',
    byId: '/pokemon/${id}',
    byName: '/pokemon/${name}'
  }

}


export const navLinks = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Battle',
    link: '/battle'
  },
  {
    label: 'History',
    link: '/history'
  },
  {
    label: 'Pokedex',
    link: '/pokedex'
  }
]
