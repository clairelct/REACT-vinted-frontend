import React, { useState } from "react";
import Button from "../components/Shared/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
  const [price, setPrice] = useState("");

  // onChanges form inputs
  const handleChangeFiles = (e) => {
    // setFile(e.target.files[0]); // Envoyer 1 fichier : [{...}]
    //setFile(e.target.files); // Envoie tout l'objet [{..},{..},{..}] /!\ On peut pas faire file.map()
    //console.log(e.target.files);

    const targetFiles = e.target.files;
    // console.log(files.length);

    // CONVERTIR NODELIST EN ARRAY
    const listFiles = Object.keys(e.target.files); //nodeList
    const newFiles = [...files];
    listFiles.map((item, index) => {
      return newFiles.push(e.target.files[index]); // [File, File, File]
    });
    console.log("newFiles", newFiles);
    setFiles(newFiles);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeBrand = (e) => {
    setBrand(e.target.value);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeCondition = (e) => {
    setCondition(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    const regex = /[0-9]/g;
    const result = regex.test(value);
    // console.log("result regex: ", result);
    // console.log("Value est:", typeof value);

    if (result) {
      setPrice(Number(value));
    } else {
      alert("Indiquez un prix en chiffres !");
      setPrice("");
    }
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
        "http://localhost:3001/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      history.push("/");
    } else {
      alert("Il manque des informations !");
    }
  };

  return (
    <main className="publish-main">
      <div className="container">
        <h2>Vends ton article</h2>
        <form className="publish-form" onSubmit={handleSubmit}>
          <section>
            <input type="file" multiple={true} onChange={handleChangeFiles} />
          </section>
          <section>
            <div>
              <h4>Titre</h4>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
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
                onChange={handleChangeDescription}
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
                onChange={handleChangeBrand}
                placeholder="ex: Zara"
              />
            </div>
            <div>
              <h4>Taille</h4>
              <input
                type="text"
                name="size"
                value={size}
                onChange={handleChangeSize}
                placeholder="ex: L / 40 / 12"
              />
            </div>
            <div>
              <h4>Couleur</h4>
              <input
                type="text"
                name="color"
                value={color}
                onChange={handleChangeColor}
                placeholder="ex: Fushia"
              />
            </div>
            <div>
              <h4>État</h4>
              <input
                type="text"
                name="condition"
                value={condition}
                onChange={handleChangeCondition}
                placeholder="ex: Neuf avec étiquette"
              />
            </div>
            <div>
              <h4>Lieu</h4>
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleChangeCity}
                placeholder="ex: Paris"
              />
            </div>
          </section>
          <section>
            <div>
              <h4>Price</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={handleChangePrice}
                  placeholder="ex: 0,00 €"
                />

                <label htmlFor="checkbox">
                  <input name="checkbox" type="checkbox" /> Je suis intéressé(e)
                  par les échanges
                </label>
              </div>
            </div>
          </section>
          <Button type="submit" text="Ajouter" />
        </form>
      </div>
    </main>
  );
};

export default PublishPage;
