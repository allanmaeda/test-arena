import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            <img src="https://arena.im/wp-content/uploads/2018/04/logo-arena.svg" className="astra-logo-svg" alt="Arena.im" />
            <span>Allan Hissato Maeda</span>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    );
}

export default Header;
