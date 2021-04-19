import {
    Container,
    FormWrap,
    Icon,

    FormContent,
    Form,
    FormH1,
    FormInput,
    Text,
    FormLabel,
    FormButton
} from "./signinstyle";

const SignIn = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Dolla</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Sign into your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">SignIn</FormButton>
                            <Text>Forgot Password</Text>
                            </Form>
                        </FormContent>
                </FormWrap>
            </Container>
        </>
        )
}

export default SignIn;