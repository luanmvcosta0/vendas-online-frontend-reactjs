import { Input as InputAntd } from "antd";
import type { InputProps } from "antd/es/input"; // Importação correta para tipos
import { BoxInput, TitleInput } from "./input.styles";

interface Props extends InputProps {
    title?: string;
}

const Input = ({ title, ...props }: Props) => {
    return (
        <BoxInput>
            {title && <TitleInput>{title}</TitleInput>}
            <InputAntd {...props} />
        </BoxInput> 
    );
};

export default Input;