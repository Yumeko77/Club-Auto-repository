import React, { useState } from 'react';
import './details.css';
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Details = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="details-container">
      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul>
          <li>
            <Link to="/home">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/vente">VENTE</Link>
          </li>
          <li>BMW 535I, NAVI, LEATHER, ABS</li>
        </ul>
      </nav>
      <hr />
      <h2 className="brand"> BMW 535i, Navi, Leather, ABS</h2>
      <img src="images/vehicule2.jpg" alt="product" />
      <div className="tab-bar">
        <div
          className={`tab ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => handleTabChange('description')}
        >
          DESCRIPTION
        </div>
        <div
          className={`tab ${activeTab === 'technique' ? 'active' : ''}`}
          onClick={() => handleTabChange('technique')}
        >
          TECHNIQUE
        </div>
        <div
          className={`tab ${activeTab === 'options' ? 'active' : ''}`}
          onClick={() => handleTabChange('options')}
        >
          OPTIONS
        </div>
        <div
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabChange('contact')}
        >
          CONTACT
        </div>
      </div>

      {activeTab === 'description' && (
        <div className="text">
          Odio euismod lacinia at quis risus sed vulputate odio ut. Lacus
          viverra vitae congue eu. Ridiculus mus mauris vitae ultricies. Ipsum
          dolor sit amet consectetur adipiscing. Egestas tellus rutrum tellus
          pellentesque eu. Sed cras ornare arcu dui vivamus arcu. Sociis natoque
          penatibus et magnis. Eu turpis egestas pretium aenean pharetra magna.
          Non blandit massa enim nec dui nunc mattis enim ut. Amet volutpat
          consequat mauris nunc congue nisi vitae suscipit. Odio euismod lacinia
          at quis. Vehicula ipsum a arcu cursus vitae congue mauris. Consectetur
          libero id faucibus nisl. Quam elementum pulvinar etiam non quam lacus
          suspendisse faucibus interdum.
          <ul>
            OPTIONS
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
      )}
      {activeTab === 'technique' && (
        <div className="text">
          Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Mi
          proin sed libero enim sed faucibus turpis. Vel pharetra vel turpis
          nunc eget lorem dolor sed. Pharetra convallis posuere morbi leo urna.
          Orci dapibus ultrices in iaculis. Ut aliquam purus sit amet luctus. Eu
          sem integer vitae justo eget magna fermentum. Hac habitasse platea
          dictumst quisque sagittis purus sit amet. Turpis in eu mi bibendum
          neque egestas. Viverra vitae congue eu consequat ac felis donec et
          odio.
        </div>
      )}
      {activeTab === 'options' && (
        <div className="text">
          Amet mattis vulputate enim nulla aliquet porttitor. Lacinia at quis
          risus sed vulputate odio ut enim. Sed ullamcorper morbi tincidunt
          ornare. Sagittis vitae et leo duis ut diam quam. Ridiculus mus mauris
          vitae ultricies leo integer. Ullamcorper morbi tincidunt ornare massa.
          Vitae sapien pellentesque habitant morbi. Massa tempor nec feugiat
          nisl pretium fusce id.
        </div>
      )}
      {activeTab === 'contact' && (
        <div className="text">
          Fringilla urna porttitor rhoncus dolor purus non enim praesent.
          Commodo ullamcorper a lacus vestibulum sed arcu non. Quam viverra orci
          sagittis eu. Bibendum arcu vitae elementum curabitur vitae nunc sed
          velit. Ut enim blandit volutpat maecenas volutpat. Metus dictum at
          tempor commodo ullamcorper a. Eleifend quam adipiscing vitae proin
          sagittis nisl rhoncus mattis. Ut eu sem integer vitae justo eget magna
          fermentum. Nunc vel risus commodo viverra maecenas accumsan. Mauris
          ultrices eros in cursus.
        </div>
      )}
    </div>
  );
};

export default Details;
