import React, { useContext } from 'react'

import { categories } from '../utils/constants';
import { Context } from '../context/contextApi';
import LeftNavItem from './LeftNavItem';

const LeftNav = () => {
  const { selectCategories, setselectCategories, mobileMenu } = useContext(Context);
  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setselectCategories(name);
      case 'home':
        return setselectCategories(name);
      case 'menu':
        return false
      default:
        break;
    }
  }
  return (
    <div className={`md:block w-[240px] overflow-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0px] transition-all ${mobileMenu ? "translate-x-0" : ""}`} >
      <div className='flex px-5 flex-col'>
        {categories.map((items) => {
          return <div key={items.name}>
            <LeftNavItem
              key={items.name}
              text={items.type === 'home' ? 'Home' : items.name}
              icon={items.icon}
              action={() => { clickHandler(items.name, items.type) }}
              className={`${selectCategories === items.name ? 'bg-white/[0.5]' : ''}`}
            />
            {items.divider && <hr className='my-5 border-white/[0.2]' />}

          </div>
        })}
      </div>


    </div>
  )
}


export default LeftNav