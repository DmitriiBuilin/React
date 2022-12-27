import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {ChatList} from "./ChatList";
import Button from "@mui/material/Button";

describe('Button', () => {
    it('render component Button', () => {
        render(<Button>Add chat</Button>)
    })

    it('render with snapshot', () => {
        const {asFragment} = render(<Button>Add chat</Button>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('render component with text name button', () => {
        render(<Button>Add chat</Button>)
        expect(screen.getByText(/Add chat/)).toBeInTheDocument()
    })

    it('render multiply component', () => {
        render(
            <>
                <Button>Add chat</Button>
                <Button>Del chat</Button>
            </>
        )
        expect(screen.getAllByRole('button').length).toBe(2)
    })

    it('button is disable', () => {
        render(<Button disabled>Add chat</Button>)
        expect(screen.getByText('Add chat')).toBeDisabled()
    })

    it('button have style color green', () => {
        render(<Button>Click</Button>)
        expect(screen.getByText('Click')).toHaveStyle({color: 'rgb(25, 118, 210)'})
    })

    it('button click with userEvent', async () => {
        const mockHandler = jest.fn()
        render(<Button click={mockHandler}>Add chat</Button>)
        await userEvent.click(screen.getByText('Add chat'))
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })

    it('text example', async () => {
        const onChange = jest.fn()
        render(<input type="checkbox" onChange={onChange} />)

        const checkbox = screen.getByRole('checkbox')
        await userEvent.dblClick(checkbox)
        expect(onChange).toHaveBeenCalledTimes(2)
        expect(checkbox).not.toBeChecked()
    })
})