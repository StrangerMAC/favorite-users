import React from 'react';
import { IUser } from '../types/data';
import cl from './User.module.css';

const userPhoto = require('../assets/images/image.webp');

const User: React.FC<IUser> = ({ name, id, photos, status }) => {
  return (
    <div className={cl.userCard}>
      <img
        className={cl.userPhoto}
        src={photos.small != null ? photos.small : userPhoto}
        alt="1"
      />
      <div className={cl.userInformation}>
        <div className={cl.userCardNumber}>Card number: {id}</div>
        <div>
          <b>Name: </b>
          <span>{name}</span>
        </div>
        <div className={cl.userStatus}>
          <b>{status ? 'Status:' : 'No status'}</b>
          <span style={{ textOverflow: 'ellipsis' }}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export { User };
