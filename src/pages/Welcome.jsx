import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [surname, setSername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [surNameError, setSurNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const navigate = useNavigate()


  const regex = /^[A-Za-zА-Яа-яЁё]+$/;
  const regexPhone = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/;
  const regexAddress = /^(ул\.|улица|пр\.)\s[A-Za-zА-Яа-яЁё\s.,'-]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;



  const [buttonError, setButtonError] = useState(true);

  const handleClick = () =>{
    if(!regex.test(name,surname)){
      setNameError(true)
      setSurNameError(true)
    }else if(!regexPhone.test(phone)){
      setPhoneError(true)
    }else if(!regexAddress.test(address)){
      setAddressError(true)
    }else if(!regexEmail.test(email)){
      setEmailError(true)
    }else if(!regexPassword.test(password)){
      setPasswordError(true)
    }else{
      setNameError(true)
      setSurNameError(true)
      setPhoneError(true)
      setAddressError(true)
      setEmailError(true)
      setPasswordError(true)
      navigate('/step-one')
      localStorage.setItem('userName', JSON.stringify(name))
      localStorage.setItem('userSurName', JSON.stringify(surname))
      localStorage.setItem('userPhone', JSON.stringify(phone))
      localStorage.setItem('userAddres', JSON.stringify(address))
      localStorage.setItem('userEmail', JSON.stringify(email))
      localStorage.setItem('userPassword', JSON.stringify(password))
    }
  }

  useEffect(()=>{
    name.length >0 && surname.length>0 &&  phone.length>0 && address.length>0 && 
    email>0 && password>0 ? setButtonError(false) : setButtonError(false)
  }, [name, phone, surname, address, email, password]);
  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText={'Добро пожаловать на курс по JS'}
          headerType={'h1'}/>
          
          <form className="welcome__form">
            <Input
              inputText="Введите ваше имя"
              inputType="text"
              inputName="username"
              inputId="username"
              inputPlaceholder="Введите ваше имя в правильном формате"
              errorText="Введите имя правильно"
              inputValue={name}
              inputChange={setName}
              hasError={nameError}
            />
            <Input
              inputText="Введите вашу фамилию"
              inputType="text"
              inputName="sername"
              inputId="sername"
              inputPlaceholder="Введите вашу фамилию в правильной форме"
              errorText="Введите фамилию правильно"
              inputValue={surname}
              inputChange={setSername}
              hasError={surNameError}
            />
            <Input
              inputText="Ваш номер"
              errorTextText="Введите номер в правильном формате например"
              inputPlaceholder='+998 9- --- -- --'
              inputType="tel"
              inputName="phone"
              inputId="phone"
              inputPattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              inputValue={phone}
              inputChange={setPhone}
              hasError={phoneError}
            />
            <Input
              inputText="Введите ваш адрес"
              inputType="text"
              inputName="address"
              inputId="address"
              inputPlaceholder="Введите адресс"
              inputValue={address}
              inputChange={setAddress}
              hasError={addressError}
            />
            <Input
              inputText="Введите вашу почту"
              inputType="email"
              inputName="email"
              inputId="email"
              inputPlaceholder="example@gmail.com"
              inputValue={email}
              inputChange={setEmail}
              hasError={emailError}
            />
            <Input
              inputText="Введите ваш пароль"
              inputType="password"
              inputName="password"
              inputId="password"
              inputPlaceholder="Пароль должен состоять из слов, цифр и символов"
              inputValue={password}
              inputChange={setPassword}
              hasError={passwordError}
            />
            
            <Button isDisabled={buttonError} buttonClick={handleClick} />
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
