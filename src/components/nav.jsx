import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function nav() {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <h2><a href="#landing">Landing</a></h2>
        <h2><a href="#company">Company</a></h2>
        <h2><a href="#CMS_Pages">CMS Pages</a></h2>
        <h2><a href="#Utility">Utility</a></h2>
      </div>

      <div className='nav-right'>
        <div className='priceBtn'><p><a href="price">129$</a></p></div>
        <div className='searchBtn'><a href="#searchBtn"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></div>
        <div className='purchaseBtn'><a href="#purchaseBtn"><FontAwesomeIcon icon={faCartShopping} /></a></div>
      </div>
    </div>
  )
}
