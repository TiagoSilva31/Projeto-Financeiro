import { Main, Body, Logo, Spacing, CreateAcc } from "./styles"
import { Input, Button } from "../../components"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <Main>
            <Body>
                <Logo>Gerenciador Financeiro</Logo>
                <Input label="E-mail" placeholder="Digite seu E-mail" />
                <Spacing />
                <Input label="Senha" placeholder="Digite sua senha" type="password"/>
                <Spacing />
                <Button label="Entrar" variant="btn-primary" />
                <Spacing />
                <CreateAcc onClick={() => navigate("/register")} >Criar Conta</CreateAcc>
            </Body>
        </Main>
    )
}

export default Login