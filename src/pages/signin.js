import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from '../components/SignInElements';
import {useHistory} from 'react-router-dom'
import {signInUser} from '../services/regularUser';

    function SignIn  () {
        const history = useHistory()
        const [data, setData] = useState({role:"user"})
        const handleChange = (e) => {
            setData({...data, [e.target.name] : e.target.value})
        }
        const onSubmit = (e) => {
            e.preventDefault()
            console.log(data)
            signInUser(data).then((response)=>{
                    history.push("/")
                setData({data:{}})
                localStorage.setItem("user", JSON.stringify(response.data.user))
                console.log("Funciono!", response) 
            }).catch((error)=>{
                console.log("hay un error", error.response)
            })
        }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Iron Food</Icon>
                    <FormContent>
                        <Form onSubmit = {onSubmit}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor= 'for'>Email</FormLabel>
                            <FormInput name= 'email' type='email' required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Password</FormLabel>
                            <FormInput name= 'password' type='password' required onChange = {handleChange} />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>   
        </>
    )
}

export default SignIn;


