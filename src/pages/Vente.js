import React from 'react';
import './vente.css';
import { Link } from 'react-router-dom';

const Vente = () => {
  return (
    <div className="location-container">
      <div className="image-container">
        <h2>Vente</h2>
      </div>

      <div className="grid-container">
        <div className="grid-item1">
          <div className="sort-container">
            <span>ORDRE :</span>
            <select id="sort-order">
              <option value="prix-croissant">Prix croissant</option>
              <option value="prix-decroissant">Prix décroissant</option>
            </select>
            <hr></hr>
          </div>

          <div className="container">
            <div className="product">
              <div className="product-image">
                <img src="images/vehicule2.jpg" alt="Produit 1" />
              </div>
              <div className="product-details">
                <h2 className="model">BMW 535i, Navi, Leather, ABS</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                  quae? Provident, numquam unde in exercitationem ratione
                  obcaecati amet aperiam ducimus assumenda, voluptates
                  laudantium ut, cumque iure atque mollitia quia nam!.
                </p>
                <span className="price">20€/jour</span>
                <button className="details">
                  <Link to="/details">En savoir plus</Link>
                </button>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src="images/vehicule2.jpg" alt="Produit 2" />
              </div>
              <div className="product-details">
                <h2 className="model">BMW 535i, Navi, Leather, ABS</h2>
                <p className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                  quo at consequatur aliquam numquam porro earum ullam rem
                  placeat repellendus voluptatem non sequi neque commodi eum, id
                  accusantium quos distinctio!.
                </p>
                <span className="price">20€/jour</span>
                <button className="details">
                  <Link to="/details">En savoir plus</Link>
                </button>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src="images/vehicule2.jpg" alt="Produit 3" />
              </div>
              <div className="product-details">
                <h2 className="model">BMW 535i, Navi, Leather, ABS</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                  quae? Provident, numquam unde in exercitationem ratione
                  obcaecati amet aperiam ducimus assumenda, voluptates
                  laudantium ut, cumque iure atque mollitia quia nam!.
                </p>
                <span className="price">20€/jour</span>
                <button className="details">
                  <Link to="/details">En savoir plus</Link>
                </button>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src="images/vehicule2.jpg" alt="Produit 4" />
              </div>
              <div className="product-details">
                <h2 className="model">BMW 535i, Navi, Leather, ABS</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  consequatur odit aperiam vero ad architecto, atque deleniti
                  sint quaerat laboriosam. Iste voluptates minus aspernatur
                  dignissimos ea porro mollitia, saepe voluptate..
                </p>
                <span className="price">20€/jour</span>
                <button className="details">
                  <Link to="/details">En savoir plus</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item2">
          <aside className="sidebar">
            <img src="images/icone-voiture.png" alt="voiture" />
            <h4>Rechercher</h4>
            <label htmlFor="type">Type :</label>
            <select id="type" name="type" className="custom-select">
              <option value="tout">Tout</option>
              <option value="berline">Berline</option>
              <option value="SUV">SUV</option>
              <option value="coupé">Coupé</option>
            </select>

            <label htmlFor="carburant">Carburant :</label>
            <select id="carburant" name="carburant" className="custom-select">
              <option value="tout">Tout</option>
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="hybride">Hybride</option>
            </select>

            <label htmlFor="marque">Marque :</label>
            <select id="marque" name="brand" className="custom-select">
              <option value="tout">Tout</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
            </select>

            <label htmlFor="modele">Modèle :</label>
            <select id="modele" name="modele" className="custom-select">
              <option value="tout">Tout</option>
              <option value="a3">A3</option>
              <option value="série 3">Série 3</option>
              <option value="classe C">Classe C</option>
            </select>

            <label htmlFor="kilometre">Kilomètre maximal :</label>
            <select id="kilometre" name="kilometre" className="custom-select">
              <option value="tout">Tout</option>
              <option value="10000">10 000 km</option>
              <option value="20000">20 000 km</option>
              <option value="30000">30 000 km</option>
            </select>

            <label htmlFor="anciennete">Ancienneté :</label>
            <select id="anciennete" name="anciennete" className="custom-select">
              <option value="tout">Tout</option>
              <option value="moins1an">Moins d'un an</option>
              <option value="1-3ans">1-3 ans</option>
              <option value="plus3ans">Plus de 3 ans</option>
            </select>

            <div className="price-label">
              <span>2000€</span>
              <span>80000€</span>
            </div>

            <div className="price-range">
              <input
                type="range"
                min="2000"
                max="80000"
                step="100"
                value="2000"
              />
            </div>

            <form>
              <input type="reset" value="Réinitialiser" />
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Vente;
