import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {SignIn} from "./signIn";

describe('Button', () => {
    it('render component Button', () => {
        render(<button>Sign In</button>)
    })

    it('render with snapshot', () => {
        const {asFragment} = render(<button>Sign In</button>)
        expect(asFragment()).toMatchSnapshot()
    })
})