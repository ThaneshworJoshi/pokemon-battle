import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import WinnerGuess from './WinnerGuess.component'

describe('WinnerGuess Component', () => {
  const guessWinnerHandler = jest.fn()
  const pokemons: any = []

  it('renders without errors', () => {
    render(
      <WinnerGuess
        guessWinnerHandler={guessWinnerHandler}
        pokemons={pokemons}
      />
    )
  })

  //   it('closes the modal when the "Close" button is clicked', () => {
  //     const { getByText, queryByTestId } = render(
  //       <WinnerGuess
  //         guessWinnerHandler={guessWinnerHandler}
  //         pokemons={pokemons}
  //       />
  //     )

  //     const guessButton = getByText('Guess')
  //     fireEvent.click(guessButton)

  //     const closeButton = getByText('Close')
  //     fireEvent.click(closeButton)

  //     const modal = queryByTestId('modal')
  //     expect(modal).not.toBeInTheDocument()
  //   })

  //   it('submits the guessed winner when the "Submit" button is clicked', () => {
  //     const { getByText, getByTestId } = render(
  //       <WinnerGuess
  //         guessWinnerHandler={guessWinnerHandler}
  //         pokemons={pokemons}
  //       />
  //     )
  //     const guessButton = getByText('Guess')
  //     fireEvent.click(guessButton)

  //     const input = getByTestId('guessed-winner-input')
  //     fireEvent.change(input, { target: { value: 'Pikachu' } })

  //     const submitButton = getByText('Submit')
  //     fireEvent.click(submitButton)

  //     // Replace the following line with your actual submission logic validation
  //     // For example, you might check if the guessed winner was logged to the console
  //     // and if the modal is closed.
  //     // Expectations depend on your implementation.
  //     expect(true).toBeTruthy()
  //   })
})
