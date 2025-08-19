import { Input as InputAntd } from "antd";
import type { InputProps } from "antd/es/input"; // Importação correta para tipos
import { BoxInput, TitleInput } from "./input.styles";

interface Props extends InputProps {
    title?: string;
    margin?: string;
}

const Input = ({ margin, title, ...props }: Props) => {
    return (
        <BoxInput style={{ margin }}>
            {title && <TitleInput>{title}</TitleInput>}
            <InputAntd {...props} />
        </BoxInput> 
    );
};

export default Input;