import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (
    <div>
        <BackgroundImage src="public\background.png"/>

        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="public\logo.png" />
            </LimitedContainer>
        </ContainerLogin>
    </div>
)
}

export default LoginScreen;