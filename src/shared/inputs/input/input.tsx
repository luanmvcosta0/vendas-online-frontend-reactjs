import type { InputProps as InputPropsAntd } from 'antd';
import { Input as InputAntd } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
    title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
    return (
        <BoxInput>
        {title && <TitleInput>{title}</TitleInput>}
        <InputAntd {...props} />
        </BoxInput>
    );
};

export default Input;