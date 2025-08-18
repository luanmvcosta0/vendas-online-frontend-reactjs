import Button from "../../../shared/buttons/button/button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styleds/loginScreen.style";

const LoginScreen = () => {

    return ( 
    <div>
        <ContainerLoginScreen>
            <BackgroundImage src="public\background.png" />
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="public\logo.png" />
                <TitleLogin level={2}> LOGIN </TitleLogin>
                <Input title="USUÁRIO" />
                <Input title="SENHA" />
                <Button type="primary" margin="64px 0px 16px 0px" >ENTRAR</Button>
            </LimitedContainer>
        </ContainerLogin>
        </ContainerLoginScreen>
    </div>
    )

}

export default LoginScreen;