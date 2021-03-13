import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, FormH3, FormSelect} from '../components/SignUpElements';
import { signUpUser } from '../services/regularUser';
import {useHistory} from 'react-router-dom'


function SignUp  () {
    const history = useHistory()
    const [data, setData] = useState({role:"user"})
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        signUpUser(data).then((response)=>{
                history.push("/signin") 
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
                            <FormH1>Create your Account</FormH1>
                            <FormLabel htmlFor= 'for'>Name</FormLabel>
                            <FormInput name ='name' type="text" required onChange = {handleChange} />
                            <FormLabel htmlFor= 'for'>Last Name</FormLabel>
                            <FormInput name ='last_name' type="text" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Email</FormLabel>
                            <FormInput name ='email' type="email" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Password</FormLabel>
                            <FormInput name ='password' type="password" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Confirm Password</FormLabel>
                            <FormInput name ='confirmPassword' type="password" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Upload a picture</FormLabel>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>     
        </>
    )
}

export default SignUp;
