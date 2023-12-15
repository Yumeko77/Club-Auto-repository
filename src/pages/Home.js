import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image"></div>

      <section className="main" id="products"></section>

      <div className="header-container">
        <h3>
          <span className="white-title">Club Auto </span>
          <span className="orange-title">Le Meilleur de L'Automobile</span>
        </h3>
      </div>
      <div className="body-container">
        <div className="card1">
          <img src="images/clients.jpg" alt="text-image1" />
        </div>
        <div className="card1">
          <h4>
            <span className="bold-text">Bienvenue Chez </span>
            <span className="orange-text">Club Auto</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            amet fuga, porro ipsam quas aliquid, delectus optio, ducimus nemo
            corporis quod eum sit iusto facilis architecto libero cupiditate
            perspiciatis consequuntur. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </div>

        <div className="card2">
          <h4>
            <span className="bold-text">Le Meilleur de L'Automobile</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quam suscipit totam recusandae tenetur consequatur provident ratione
            quia, eius velit voluptatibus, nulla voluptates, quae animi
            reiciendis. Sit blanditiis pariatur recusandae?
          </p>
          <ul>
            <li>
              <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit amet{' '}
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit amet{' '}
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit amet{' '}
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit amet{' '}
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit amet{' '}
            </li>
          </ul>
        </div>
        <div className="card2">
          <img src="images/entretien.jpg" alt="text-image2" />
        </div>
      </div>

      <div className="image3">
        <img src="images/vente-location.jpg" alt="location" />
        <div className="cadre1">
          <h4> Vous souhaitez louer?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            magni dolorum, in non fugiat optio ducimus officia doloribus
            repudiandae consectetur libero quis nemo sint tempora pariatur fuga
            repellat, doloremque ipsam.
          </p>
        </div>
        <div className="cadre2">
          <h4> Vous souhaitez acheter?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            magni dolorum, in non fugiat optio ducimus officia doloribus
            repudiandae consectetur libero quis nemo sint tempora pariatur fuga
            repellat, doloremque ipsam.
          </p>
        </div>
      </div>

      <div className="list-car">
        <h4 className="textcenter"> Vehicules Recents</h4>
        <hr />

        <div className="car-container">
          <div className="car">
            <img src="images/vehicule2.jpg" alt="car1"></img>
            <h5> BMW 5351, NAVI, LEATHER, ABS </h5>
            <span className="prix">5500€</span>
          </div>

          <div className="car">
            <img src="images/vehicule2.jpg" alt="car2"></img>
            <h5> BMW 3281, SPORT, LINE BODY KIT </h5>
            <span className="prix">8000€</span>
          </div>

          <div className="car">
            <img src="images/vehicule2.jpg" alt="car2"></img>
            <h5>FORD EXPLORER 2015 4WD </h5>
            <span className="prix">8200€</span>
          </div>
        </div>
      </div>

      <div className="footer-items">
        <h5 className="centered-text">Pourquoi nous choisir ?</h5>
        <div className="icons-container">
          <div className="icon">
            <img src="images/icon1.png" alt="icon1" />
            <h6>Financement</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias
              consequatur a nisi quibusdam ratione sapiente officia, libero
              velit magni laudantium, eius molestiae optio mollitia pariatur!
              Voluptatum nostrum vero esse?
            </p>
          </div>

          <div className="icon">
            <img src="images/icon2.png" alt="icon2" />
            <h6>Réactivité de L'équipe technique</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              fuga, illo ratione nesciunt sequi ipsa ducimus consectetur
              repellendus earum accusamus, libero, vel ex aut doloribus
              voluptatum est deserunt incidunt quaerat!
            </p>
          </div>

          <div className="icon">
            <img src="images/icon3.png" alt="icon3" />
            <h6>A l'écoute de notre clientèle</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              deserunt velit ipsam rerum voluptatibus tempore quo, ad earum
              dicta tenetur error tempora enim, obcaecati voluptate consectetur
              voluptatum sequi. Repellendus, consequatur!
            </p>
          </div>

          <div className="icon">
            <img src="images/icon4.png" alt="icon4" />
            <h6>Service & Maintenance</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis culpa sunt alias, facere odio velit odit facilis illo
              explicabo dolores dolorum cum ducimus dolore et accusamus laborum
              nobis veritatis. Cumque?
            </p>
          </div>
        </div>

        <button type="button">Contactez nous</button>
      </div>
      <div className="image-end">
        <img src="images/vehicule3.jpg" alt="imagelast"></img>
      </div>
    </div>
  );
};

export default Home;
