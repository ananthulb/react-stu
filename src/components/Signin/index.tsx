import React from 'react'
import { Container, FormH1, FormInput, FormLabel, FormWrap, Text, FormContent, Form, Icon, FormButton } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' placeholder='Enter your email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' placeholder='Enter your password' required />
                            <FormButton type='submit' value='Sign in' >Continue</FormButton>
                            <Text>Forgot password?</Text>
                            {/* <Button primary="true" dark="true">Sign in</Button> */}
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
