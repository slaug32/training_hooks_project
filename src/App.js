import './App.css';
import React from 'react';

function App() {

  const [email, setEmail] = React.useState("")
  const [name1, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [emailDart, setEmailDart] = React.useState(false)
  const [nameDart, setNameDart,] = React.useState(false)
  const [phoneDart, setPhoneDart] = React.useState(false)
  const [emailError, setEmailError] = React.useState("Введите корректный email")
  const [nameError, setNameError] = React.useState("Введите корректное имя")
  const [phoneError, setPhoneError] = React.useState("Введите корректный номер")
  const [formValid, setFormValid] = React.useState(false)

  React.useEffect(() => {
    if (emailError || nameError || phoneError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, nameError, phoneError])

  const funcEmail = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email")
    } else {
      setEmailError("")
    }
  }

  const funcPhone = (e) => {
    setPhone(e.target.value)
    if (e.target.value.length > 11) {
      setPhoneError("Некорректный номер")
    } else {
      setPhoneError("")
    }
  }

  const funcName = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 3) {
      setNameError("Некорректное имя")
    } else {
      setNameError("")
    }
  }

  const func = (e) => {
    switch (e.target.name) {
      case "name1":
        setNameDart(true)
        break
      case "phone":
        setPhoneDart(true)
        break
      case "mail":
        setEmailDart(true)
        break
    }
  }

  return (
    <form className="app">
      <h1>Регистрация</h1>
      <div>Имя</div>
      {(nameDart && nameError) && <div style={{ color: "red" }}>{nameError}</div>}
      <input onChange={e => funcName(e)} value={name1} onBlur={e => func(e)} name="name1" type="text" placeholder="ваше имя" />
      <div>Email</div>
      {(emailDart && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
      <input onChange={e => funcEmail(e)} value={email} onBlur={e => func(e)} name="mail" type="text" placeholder="ваш email" />
      <div>Номер телефона</div>
      {(phoneDart && phoneError) && <div style={{ color: "red" }}>{phoneError}</div>}
      <input onChange={e => funcPhone(e)} value={phone} onBlur={e => func(e)} name="phone" type="text" placeholder="ваш номер" />
      <div>Языки</div>
      <select>
        <option>Английский</option>
        <option>Русский</option>
        <option>Китайский</option>
      </select>
      <button disabled={!formValid} type="submit">Зрегестрироваться</button>
    </form>
  );
}

export default App;
