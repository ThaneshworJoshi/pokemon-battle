import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import Modal from './Modal.component'

describe('Modal Component', () => {
  it('should render the modal when isOpen is true', () => {
    const { getByText, queryByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>
    )

    // Check if the modal content is present
    expect(getByText('Modal Content')).toBeInTheDocument()

    // Check if the close button is present
    expect(queryByText('x')).toBeInTheDocument()
  })

  it('should not render the modal when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>
    )

    // Check that the modal content is not present
    expect(queryByText('Modal Content')).toBeNull()

    // Check that the close button is not present
    expect(queryByText('×')).toBeNull()
  })

  it('should call onClose when the close button is clicked', () => {
    const onCloseMock = jest.fn()
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Modal Content</p>
      </Modal>
    )

    const closeButton = getByTestId('close-button')
    fireEvent.click(closeButton)

    // Check that onCloseMock is called when the close button is clicked
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
