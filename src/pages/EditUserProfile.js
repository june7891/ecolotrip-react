import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import {Link} from "react-router-dom";
import styles from '../assets/styles/pages/EditUserProfile.module.scss';

export default function EditUserProfile() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/api/user/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost/api/user/${id}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/login");
      });
  };

  return (
    <>
      <div className="container d-flex align-items-center">
        <div className={`${styles.formAccount} form`}>
          <form onSubmit={handleSubmit} className={`${styles.right}`}>
            <label>pseudo</label>
            <input value={inputs.username} type="text"  />
            <label>email</label>
            <input value={inputs.email} type="email"  />
       
            <label>nom</label>
            <input type="text" />

            <label>prénom</label>
            <input type="text" />

            <label>téléphone</label>
            <input
              type="tel"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
            />

            <label>date de naissance</label>
            <input type="date" />

            <label>adresse</label>
            <input type="text" />

            <label>genre</label>
            <select name="gender">
              <option value=""></option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="autre">Autre</option>
            </select>

            <label for="image">photo de profil</label>

            <input src="" type="file" name="image" multiple />

            <button className="btn-form" type="submit">Enregister</button>
          </form>
        </div>
      </div>
    </>
  );
}
