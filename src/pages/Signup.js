import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/api/user/register", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/login");
      });
  };
  return (
    <>
      <h1>Deviens un Triper!</h1>

      <div className="form">

        <form onSubmit={handleSubmit}>
            <input label="Username" name="username" type="text" placeholder={"pseudo"} onChange={handleChange}  />
            <input label="Email" name="email" type="email" placeholder={"email"} onChange={handleChange}  />
            <input label="password" name="password" type="password" placeholder={"password"}onChange={handleChange} />
            <input label="Confirm Password" name="confirmPassword" type="password" placeholder={"confirm password"} onChange={handleChange} />
            <button className = "btn-form" type="submit">s'inscrire</button>
            <p className="connection">déjà un compte ? <Link to="/login">Se connecter</Link></p>
        </form>
      </div>
    </>
    
   
  );
}


