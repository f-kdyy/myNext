import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MyContentTopbar() {
  return (
    <div className='content-top'>
        <FontAwesomeIcon icon={faBars} className='fa' />
        <h1>运维平台</h1>
    </div>
  )
}
