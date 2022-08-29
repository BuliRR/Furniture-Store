import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import card from '../assets/credit-card.jpeg'
import warehouse from '../assets/warehouse.jpeg'
import sofa from '../assets/sofa-zoom.jpeg'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    img: card,
    title: 'Purchase Securely',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    img: warehouse,
    title: 'Ships From Warehouse',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    img: sofa,
    title: 'Style Your Room',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export const aboutlinks = [
  {
    id: 1,
    url: '#',
    text: 'our story',
  },
  {
    id: 2,
    url: '#',
    text: 'benefits',
  },
  {
    id: 3,
    url: '#',
    text: 'team',
  },
  {
    id: 4,
    url: '#',
    text: 'careers',
  },
]

export const products_url =
  'https://my-furniture-store-api.herokuapp.com/products'

export const single_product_url = `https://my-furniture-store-api.herokuapp.com/single-product?id=`
