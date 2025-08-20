import { useState } from "react";
import Button from "../../../shared/components/buttons/button/button";
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from "../../../shared/components/inputs/input/input";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContex";
import useRequests from '../../../shared/hooks/useRequests';
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from "../styleds/loginScreen.style";
import type { UserType } from "../types/UserType";

const LoginScreen = () => {
    const { accessToken, setAccessToken } = useGlobalContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { postRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        
        const user = await postRequest<UserType>('http://localhost:8080/auth', {
            email: email,
            password: password,
        });

        setAccessToken(user?.accessToken || '');  
    };

    return ( 
    <div>
        <ContainerLoginScreen>
            <BackgroundImage src="public\background.png" />
        <ContainerLogin>
            <LimitedContainer>
                <SVGLogo />
                <TitleLogin level={2}>
                    LOGIN ({accessToken})
                </TitleLogin>
                <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
                <Input type="password" title="SENHA" margin="32px 0px 0px" onChange={handlePassword} value={password} />
                <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin} >ENTRAR</Button>
            </LimitedContainer>
        </ContainerLogin>
        </ContainerLoginScreen>
    </div>
    )

}

export default LoginScreen;