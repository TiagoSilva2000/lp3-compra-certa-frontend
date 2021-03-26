import React from 'react'
import {TextField} from '@material-ui/core'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  ProfileWrapper,
  StyledProfilePage,
  CustomChip
} from './style'

type MyState = { 
    name: string,
    email:string,
    phoneNumber:string,
    birthDate: string
}

class Profile extends React.Component<{ props: any }, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email:'',
            phoneNumber:'',
            birthDate: '1111111',
            };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleNameChange(event: any) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event: any) {
        this.setState({email: event.target.value});
    }

    handlePhoneNumberChange(event: any) {
        this.setState({phoneNumber: event.target.value});
    }

    handleBirthDateChange(event: any) {
        this.setState({birthDate: event.target.value});
    }

    handleSubmit(event: any) {
        console.log('updated user infos:', this.state);
        event.preventDefault();
    }

    render(){
        return (
            <>
            <Header />
            <StyledProfilePage>
                <CategoryWrapper>
                <h3>Minha conta:</h3>
                <ul>
                    {AccountList.map((category, idx) => (
                    <li key={idx}>
                        <a onClick={() => console.log(3)}>{category}</a>
                    </li>
                    ))}
                </ul>
                </CategoryWrapper>
                <ProfileWrapper>
                <CustomChip />
                <form onSubmit={this.handleSubmit} autoComplete="off">
                        <TextField id="filled-basic"
                        className="input" 
                        value={this.state.name} 
                        label="Nome:" 
                        variant="filled"
                        onChange={this.handleNameChange.bind(this)} />
                  
                        <TextField id="filled-basic" 
                        value={this.state.email} 
                        className="input" 
                        label="Email:" 
                        variant="filled"
                        onChange={this.handleEmailChange.bind(this)} />

                        <TextField id="filled-basic" 
                        value={this.state.phoneNumber} 
                        className="input" 
                        label="Telefone:" 
                        variant="filled"
                        onChange={this.handlePhoneNumberChange.bind(this)} />
              
                        <TextField id="filled-basic" 
                        value={this.state.birthDate} 
                        className="input" 
                        label="Data de nascimento:" 
                        variant="filled"
                        onChange={this.handleBirthDateChange.bind(this)} />
                    <input type="submit" value="Enviar" />
                </form>
                </ProfileWrapper>
            </StyledProfilePage>
            <Footer />
            </>
        )
    }
}
export default Profile