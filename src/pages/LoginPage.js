import { useState } from "react";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({...form, [e.target.value]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
        //axios aqui vai colocar o post
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}/>

        <label>Senha:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage
