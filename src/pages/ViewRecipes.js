import React, { useState, useEffect } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from '../components/ViewRecipesElements';
import { getAllRecipes } from '../services/recipeContributor'

    function ViewRecipes  () {
        const [recipes, setRecipes] = useState([])
        useEffect(()=>{
            getAllRecipes()
            .then((allRecipes)=>{setRecipes(allRecipes.data.result)})
            .catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(recipes)
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Iron Food</Icon>
                    <FormContent>
                        {recipes.map((item)=><Form >
                            <FormH1>View More Recipes</FormH1>
                            <img width="300px" height="300px" src={item.image}></img>
                            <div>Title: {item.title}</div>
                            <div>Servings: {item.servings}</div>
                            <div>Cooking Time: {item.readyInMinutes}</div>
                            <div>Description: {item.description}</div>
                            
                            
                        </Form>)}
                    </FormContent>
                </FormWrap>
            </Container>   
        </>
    )
}

export default ViewRecipes;


