import React, {useState} from 'react'
// import { recipeContributor } from '../services/recipeContributor'
import {useHistory} from 'react-router-dom'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormH3, FormSelect, FormLabel, FormInput, FormButton} from '../components/EntryRecipesStyles'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {createRecipes} from '../services/recipeContributor'

function EntryRecipes () {
    const history = useHistory()
    const [data, setData] = useState ({})
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        createRecipes(data).then((response) => {
            history.push("/")
            setData({data:{}})
            console.log("Cogio los demas datos!", response)
        }).catch((error)=>{
            console.log("Nope, esta mal", error.response)
        })
    }

    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Iron Food</Icon>
                <FormContent>
                    <Form onSubmit = {onSubmit}>
                        <FormH1>Share your Favorite Recipes with us 💚</FormH1>
                        <FormLabel htmlFor= 'for'>Recipe Name🖊️</FormLabel>
                            <FormInput name ='title' type="text"  onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Servings 👨‍👨‍👧‍👦</FormLabel>
                        <FormInput placeholder ='For how many people is this recipe?' name='servings' type="text"  onChange = {handleChange}/>
                        <FormLabel htmlFor= 'for'>Cooking Time ⌚</FormLabel>
                        <FormInput placeholder ='How long does it take to cook this recipe?' name='readyInMinutes' type="text" onChange = {handleChange}/>
                        <FormLabel htmlFor= 'for'>Description 🗒️</FormLabel>
                     <FormInput placeholder ='Write a Description of your recipe 🗒️' name="description" type="text"  onChange = {handleChange}/>
                        
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        
        </>
    )
}

export default EntryRecipes;