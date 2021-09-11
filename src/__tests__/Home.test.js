import React from 'react'
import { render } from '@testing-library/react'
import Home from '../components/Home'
import HomeMock from '../__mocks__/HomeMock'

describe('Comprobar primer render', () => {
    test('Primer render fallido', () => {
            const data = HomeMock.data
            expect(data).toBeUndefined()
    } )
})


describe('Probar carga del componente', () => {
        test('prueba de componente Home', () => {
            const testHome = render(<Home></Home>)
            expect(testHome.length).toEqual(undefined)
            })
        })