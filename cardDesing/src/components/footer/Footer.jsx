import React from 'react'
import './Footer.scss';

const Footers = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Betül Kuyucu</h3>
            <ul className='list-unstyled '>
              <li><a href="https://github.com/Betulk96/React-MiniProjects/tree/main/cardDesing">Github</a></li>
              <li> <a href="https://replit.com/@BetulKuyucu/FlowerCard#index.html">Replit</a></li>
              <li><a href="https://www.linkedin.com/in/bet%C3%BCl-kuyucu/">Linkedin</a></li>
              <li></li>
            </ul>





          </div>
          <div className="col-md-4 ">
            <h4 className='text-white ps-3 '>Quick Links</h4>
            <ul className='list-unstyled '>
              <li><a href="#"> <img src="https://icons.iconarchive.com/icons/iconarchive/easter-egg/48/Flower-Creative-Easter-Egg-icon.png"></img>Home </a></li>
              <li><a href="#"> <img src="https://icons.iconarchive.com/icons/iconarchive/easter-egg/48/Flower-Yellow-Easter-Egg-icon.png"></img>About</a></li>
              <li><a href="#"> <img src="https://icons.iconarchive.com/icons/iconarchive/easter-egg/48/Flower-White-Easter-Egg-icon.png"></img>Services</a></li>
              <li><a href="#"> <img src="https://icons.iconarchive.com/icons/iconarchive/easter-egg/48/Flower-Red-Easter-Egg-icon.png"></img>Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>123 Street Name</p>
            <p>Aydın, Turkey</p>
            <p>Email: 96betul@gmail.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footers;
