import React, { useEffect, useState } from "react";
import './CustomersSay.css';
import Image from "../Image";


const CustomersSay = ({rating="", guest="", text="", imgSrc="", imgAlt="", imgClass=""}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1&nat=us")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    users.map((user) => (
      <blockquote key={user.login.uuid} className="customers-say">
        <div className="customers-say__rating"><Image className="customers-say__rating-icon" imgSrc="./assets/icons/star.png" imgAlt="Star rating"></Image>{rating}/5</div>
        <div className="customers-say__wrapper">
          <div className="customers-say__image-wrapper">
            <Image className={imgClass + " customers-say__img"} imgSrc={user.picture.medium} imgAlt={user.img} />
          </div>
          <cite className="customers-say__name">{user.name.first} {user.name.last}</cite>
        </div>
        <p className="customers-say__quote">{text}</p>
      </blockquote>
    ))
  )
}

export default CustomersSay;