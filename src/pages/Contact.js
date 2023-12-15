import React from "react";
import './contact.css'; 

const Contact = () => {
    return (
      <div className="contact-container">
      <div className="form-container">
        <h1>Contactez nous</h1>
        <form action="traitement.php" method="POST">
          <div className="form-group">
            <label htmlFor="prenom">Prénom* :</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>
          <div className="form-group">
            <label htmlFor="nom">Nom* :</label>
            <input type="text" id="nom" name="nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email* :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Téléphone* :</label>
            <input type="tel" id="telephone" name="telephone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message* :</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}
  
  export default Contact;
  
