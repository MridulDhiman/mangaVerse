import React from 'react'

import cartStyles from "./CartDrawer.module.css";
import { useQuery } from '@tanstack/react-query';
import { getCartItems } from '../../../http';
import CartItems from './CartItems';
import CartDrawerFooter from './CartDrawerFooter';
import { findSubTotalOfCart } from '../../../util';

export default function CartDrawer({onClose}) {
  const {data, isPending, isError} = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartItems(),
  })

  const x = {
    product: {
      
        "_id": "65a3a4c7e6f7db87090c405b",
        "name": "Bankai Hoodie (Oversize Drop-Shoulder)",
        "slug": "bankai-hoodie",
        "price": 1999,
        "hasDiscount": true,
        "discountedPrice": 2299,
        "addedToWishlist": false,
        "hoverImage": "products/bankai2.webp",
        "initialImage": "products/bankai1.webp",
        "isSoldOut": false,
        "hasSensitiveContent": false,
        "noOfReviews": 3,
        "productType": "Hoodies",
        "animeType": "Bleach",
        "avgRating": 5,
        "allSizesAvailable": true,
        "availableSizes": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ],
        "hasOffer": true,
        "offerDueDate": "2024-01-14T09:08:53.447Z",
        "offerType": [
          "Limited Edition",
          "Neon Print",
          "Sleeveless"
        ],
        "__v": 0,
        "createdAt": "2024-01-14T09:09:27.776Z",
        "updatedAt": "2024-01-14T09:09:27.776Z"
      },
      quantity: 2,
  }


  const y = {
    product: {
      ...x.product,
      _id: "65a3a4c7e6f7db0c405b"
    },
    quantity: 3
  }

  const z = {
    product: {
      ...x.product,
      _id: "65a3a4c7edb0c405b"
    },
    quantity: 5
  }

  const w = {
    product: {
      ...x.product,
      _id: "654c7edb0c405b"
    },
    quantity: 5
  }

  const a = {
    product: {
      ...x.product,
      _id: "654c70c405b"
    },
    quantity: 5
  }

  const b = {
    product: {
      ...x.product,
      _id: "b0c405b"
    },
    quantity: 5
  }

  const c = {
    product: {
      ...x.product,
      _id: "654c7"
    },
    quantity: 5
  }

  const items = [x,y,];
  if(data) {
    console.log(data);
  }
  
  if(isPending) {
    return <p>Loading...</p>
  }

  let subTotal = findSubTotalOfCart(items);
  console.log(subTotal);
  return (
    
    <div className={cartStyles.container}>
            <div className={cartStyles.top}>
                <p style={{textTransform:'capitalize', fontFamily:"'Bungee', sans-serif"}}>Shopping Cart</p>
                <div>
                    <svg onClick={onClose} className={cartStyles.icon} style={{fill:"grey"}} fill="#000000" height="1rem" width="1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg></div>
            </div>
            <div className={cartStyles.content}>
              {/* {data?.length === 0 &&  <p>No Products in the Cart Yet</p>}
              { data?.length !== 0 && <CartItems items={data}/>} */}
           <CartItems onClose={onClose} items={data}/>
           <CartDrawerFooter onClose={onClose} subTotal={subTotal}/>
            </div>
        </div>
  )
}
