import { Main, Body, Logo, Spacing, CreateAcc } from "./styles"
import { Input, Button } from "../../components"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios" 

const Register = () => {
   
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const navigate = useNavigate()

    const save = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/user", data)
        alert("Usuário cadastrado com sucesso!")
    }

    return (
        <Main>
            <Body>
                <form onSubmit={save}>
                    <Logo>Gerenciador Financeiro</Logo>
                    <Input 
                        label="Nome" 
                        placeholder="Digite seu Nome" 
                        required={true}
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}
                    />
                    <Spacing />
                    <Input 
                        label="E-mail" 
                        placeholder="Digite seu E-mail" 
                        required={true} 
                        type="email"
                        value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                    />
                    <Spacing />
                    <Input 
                        label="Senha" 
                        placeholder="Digite sua Senha" 
                        type="password" 
                        required={true}
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })}
                    />
                    <Spacing />
                    <Button 
                        label="Criar Conta" 
                        variant="btn-primary" 
                        type="submit"
                    />
                    <Spacing />
                    <CreateAcc onClick={() => navigate("/login")}>Fazer Login</CreateAcc>
                </form>
            </Body>
        </Main>
    )
}

export default Register