import axios from 'axios';
import { useState } from "react";
import Button from "../../../shared/buttons/button/button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styleds/loginScreen.style";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const returnObject = await axios({
            method: "post",
            url: "http://localhost:8080/auth",
            data: {
                email: email,
                password: password,
            },
        })
        .then((result) => {
            return result;
        })
        .catch(() => {
            alert('Usuário ou Senha inválida')
        })

        alert(`Login efetuado com sucesso`)
    }

    return ( 
    <div>
        <ContainerLoginScreen>
            <BackgroundImage src="public\background.png" />
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="public\logo.png" />
                <TitleLogin level={2}> LOGIN </TitleLogin>
                <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
                <Input type="password" title="SENHA" margin="32px 0px 0px" onChange={handlePassword} value={password} />
                <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin} >ENTRAR</Button>
            </LimitedContainer>
        </ContainerLogin>
        </ContainerLoginScreen>
    </div>
    )

}

export default LoginScreen;