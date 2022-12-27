import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Profile from "./Profile";


describe('Profile', () => {
    it('render component Profile', () => {
        render(<Profile></Profile>)
    })


})
