import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { findByLabelText } from '@testing-library/react'

export const MealList = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const section = styled.div`
    margin: 2rem 0 1 rem;

`

export const controls = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

`

export const input = styled.div`
    text-align: center;
    padding: 0.5 rem;
    margin-bottom: 1rem;
`

export const button = styled.div`
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #f3f3f3;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

`

button:hover {
    cursor: pointer;
    background-color: #6a0fd3;
}

export const main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const h1= styled.div`
    text-align: center;
    margin-bottom: 2rem;
`

export const nutrients ul = styled.div`
    display: flex;
    width: 35rem;
    justify-content: space-evenly;

`

export const ul = styled.div`
    list-style: none;
`

export const meals = styled.div`
    display: flex;

`

export const img = styled.div`
    width: 100%;
    margin-bottom: 1rem;

`

export const article = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 0 1 rem;
    max-width: 18rem;
    box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15)

`

export const instructions = styled.div`
    font-size: 0.9rem;
    margin-bottom: 1rem;

`
a {
    text-decoration: none;
    background-color: #7f21eb;
    color: #f3f3f3;
    width: fit-msContentScript;
    padding: 0.5rem 1 rem;
}

a:hover {
    cursor: pointer;
    background-color: #6a0fd3;
}

@media only screen and (max-width: 550px) {
    .meals {
        flex-direction: column;
        align-items: center;
    }

.nutrients ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
}


