import React, { useState } from "react";
import Button from "../components/Shared/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishPage = ({ token }) => {
  const history = useHistory();
  // States form
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const handleChangeFiles = (e) => {
    // setFile(e.target.files[0]); // Envoyer 1 fichier : [{...}]
    //setFile(e.target.files); // Envoie tout l'objet [{..},{..},{..}] /!\ On peut pas faire file.map()

    // CONVERTIR NODELIST EN ARRAY
    const listFiles = Object.keys(e.target.files); //nodeList
    const newFiles = [...files];
    listFiles.map((item, index) => {
      return newFiles.push(e.target.files[index]); // [File, File, File]
    });
    // console.log("newFiles", newFiles);
    setFiles(newFiles);
  };

  // Préparer l'objet formData à envoyer dans requête post
  const formData = new FormData();
  // Boucler sur un tableau de files
  // append a la meme clé "file", files[i]
  files.map((file, index) => {
    //console.log("file", file);
    return formData.append("file", file); //formData.file: [{..},{..},{..}]
  });

  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", price);

  // onSubmit - Envoi vers serveur
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        files &&
        title &&
        description &&
        brand &&
        size &&
        color &&
        condition &&
        city &&
        price
      ) {
        const response = await axios.post(
          "https://vinted-phoenix.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        history.push("/");
      } else {
        alert("Il manque des informations !");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return token ? (
    <main className="publish-main">
      <div className="container">
        <h2>Vends ton article</h2>
        <form className="publish-form" onSubmit={handleSubmit}>
          <section className="file-upload">
            <div>
              <label className="file-label" htmlFor="file-input">
                <FontAwesomeIcon icon="plus-circle" />
                <span>Ajouter une photo</span>
              </label>
              <input
                id="file-input"
                name="file-input"
                type="file"
                multiple={true}
                onChange={handleChangeFiles}
              />
              <p
                className="legend"
                style={
                  files.length !== 0
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Photo(s) ajoutée(s) !
              </p>
            </div>
          </section>
          <section>
            <div>
              <h4>Titre</h4>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="ex: Chemise Sézane verte"
              />
            </div>
            <div>
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                cols="30"
                rows="10"
                placeholder="ex: Porté quelque fois, taille correctement"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </section>
          <section>
            <div>
              <h4>Marque</h4>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                placeholder="ex: Zara"
              />
            </div>
            <div>
              <h4>Taille</h4>
              <input
                type="text"
                name="size"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                placeholder="ex: L / 40 / 12"
              />
            </div>
            <div>
              <h4>Couleur</h4>
              <input
                type="text"
                name="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                placeholder="ex: Fushia"
              />
            </div>
            <div>
              <h4>État</h4>
              <input
                type="text"
                name="condition"
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                placeholder="ex: Neuf avec étiquette"
              />
            </div>
            <div>
              <h4>Lieu</h4>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="ex: Paris"
              />
            </div>
          </section>
          <section>
            <div>
              <h4>Price</h4>
              <div className="checkbox-section">
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  placeholder="ex: 0,00 €"
                />
                <div>
                  <label htmlFor="checkbox-exchange">
                    <input
                      id="checkbox-exchange"
                      name="checkbox-exchange"
                      type="checkbox"
                    />
                    Je suis intéressé(e) par les échanges
                  </label>
                </div>
              </div>
            </div>
          </section>
          <div>
            <Button type="submit" text="Ajouter" />
          </div>
        </form>
      </div>
    </main>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { fromPublish: true },
      }}
    />
  );
};

export default PublishPage;
