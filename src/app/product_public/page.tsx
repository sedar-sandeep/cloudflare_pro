'use client'

import React, { useState, useEffect } from 'react'
import Product_menu from '@/components/Product_menu'
import ProductFilter from '@/components/ProductFilter'
const img_url = 'https://pub-a8028995ee2643b6af20b884be05be0d.r2.dev/'

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: 'York Weave',
    price: 293,
    oldPrice: 395,
    discount: 25,
    imageKey: '1634548045_2eefb7366dbc1b6cb9ac.jpg',
    description: 'Sunscreen Roller Shades - Grey'
  },
  {
    id: 2,
    name: 'Antarctica',
    price: 144,
    oldPrice: 192,
    discount: 25,
    imageKey: '1699013375_018c4a729461de967475.jpg',
    description: '50mm Classic Aluminum Venetian Blinds - Silver'
  },
  {
    id: 3,
    name: 'Fluix/Alva',
    price: 511,
    oldPrice: 681,
    discount: 25,
    imageKey: '1699013375_0ead78f566cbcbd66ed4.jpg',
    description: '50mm Classic Wooden Venetian Blinds - Brown'
  },
  {
    id: 4,
    name: 'Classic White',
    price: 102,
    oldPrice: 136,
    discount: 25,
    imageKey: '1699618872_92485199dc228fc92f5e.jpg',
    description: '25mm Classic Aluminum Venetian Blinds - White'
  },
  {
    id: 5,
    name: 'Blue Shade',
    price: 130,
    oldPrice: 173,
    discount: 25,
    imageKey: '1699618872_bf430b62e550ca43bd92.jpg',
    description: '50mm Classic Aluminum Venetian Blinds - Blue'
  },
  {
    id: 6,
    name: 'Off-White Blackout',
    price: 194,
    oldPrice: 259,
    discount: 25,
    imageKey: 'Logistic.jpg',
    description: 'Blackout Roller Blinds - Off-White'
  },
  {
    id: 7,
    name: 'Printed Blue',
    price: 253,
    oldPrice: 337,
    discount: 25,
    imageKey: '1699013375_0ead78f566cbcbd66ed4.jpg',
    description: 'Sunscreen Roller Blinds printed - Blue'
  },
  {
    id: 8,
    name: 'Printed Mocha',
    price: 253,
    oldPrice: 337,
    discount: 25,
    imageKey: '1699013375_018c4a729461de967475.jpg',
    description: 'Sunscreen Roller Blinds printed - Mocha'
  },
  {
    id: 9,
    name: 'Vertical Navy Blue',
    price: 232,
    oldPrice: 309,
    discount: 25,
    imageKey: '1699618872_92485199dc228fc92f5e.jpg',
    description: '89mm Aluminum Vertical Blinds - Navy Blue'
  },
  {
    id: 10,
    name: 'Vertical Ivory',
    price: 232,
    oldPrice: 309,
    discount: 25,
    imageKey: '1699618872_bf430b62e550ca43bd92.jpg',
    description: '89mm Aluminum Vertical Blinds - Ivory'
  },
  {
    id: 11,
    name: 'Mint Green Roman',
    price: 322,
    oldPrice: 429,
    discount: 25,
    imageKey: '1723267723_0e9c6e2393785ccc030c.jpg',
    description: 'Roman Shades - Mint Green'
  },
  {
    id: 12,
    name: 'Tissue Grey',
    price: 232,
    oldPrice: 309,
    discount: 25,
    imageKey: '1747301526_482d0305a0fafb291a4d.webp',
    description: '89mm Tissue Vertical Blinds - Grey'
  },
  {
    id: 13,
    name: 'Vintage Wooden White',
    price: 550,
    oldPrice: 733,
    discount: 25,
    imageKey: '1699013375_0ead78f566cbcbd66ed4.jpg',
    description: '50mm Vintage Wooden Venetian Blinds - White'
  },
  {
    id: 14,
    name: 'Classic Green',
    price: 232,
    oldPrice: 309,
    discount: 25,
    imageKey: '1699013375_018c4a729461de967475.jpg',
    description: '25mm Classic Aluminum Venetian Blinds - Green'
  },
  {
    id: 15,
    name: 'Blackout Black',
    price: 184,
    oldPrice: 245,
    discount: 25,
    imageKey: '1699618872_92485199dc228fc92f5e.jpg',
    description: 'Blackout Roller Blinds - Black'
  },
  {
    id: 16,
    name: 'Printed Purple',
    price: 253,
    oldPrice: 337,
    discount: 25,
    imageKey: '1699618872_bf430b62e550ca43bd92.jpg',
    description: 'Sunscreen Roller Blinds printed - Purple'
  },
  {
    id: 17,
    name: 'Multi-Color Blackout',
    price: 409,
    oldPrice: 545,
    discount: 25,
    imageKey: '1723267723_0e9c6e2393785ccc030c.jpg',
    description: 'The Met Blackout Blinds - Multi-Color'
  }
]

const filters = {
  categories: [
    'Roller Blinds',
    'Venetian Blinds',
    'Roman Shades',
    'Vertical Blinds',
    'Panel Blinds',
    'Honeycomb Blinds'
  ],
  subcategories: [
    'Flat Roman Shades',
    'Classic Roman Shades',
    'Blackout Roller Blinds',
    'Printed Roller Blinds',
    'Wooden Venetian Blinds',
    'Aluminum Venetian Blinds'
  ],
  colors: [
    'White',
    'Beige',
    'Grey',
    'Cream',
    'Red',
    'Orange',
    'Blue',
    'Green',
    'Mocha',
    'Ivory',
    'Purple',
    'Black',
    'Multi-Color'
  ],
  brands: [
    'The MET',
    'Antarctica',
    'Fluix/Alva',
    'York Weave',
    'Classic',
    'Vintage'
  ],
  roomTypes: ['Office', 'Living Room', 'Bedroom', 'Children Room'],
  collections: ['Avion', 'Heritage', 'Modern', 'Mist Solar'],
  availability: ['In Stock', 'Out of Stock']
}

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    async function fetchImageUrls() {
      const urlMap: { [key: string]: string } = {}
      await Promise.all(
        paginatedProducts.map(async (product) => {
          if (product.imageKey) {
            const res = await fetch('/api/files', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ key: product.imageKey })
            })
            const { signedUrl } = await res.json()
            urlMap[product.imageKey] = signedUrl
          }
        })
      )
      setImageUrls(urlMap)
    }
    fetchImageUrls()
  }, [currentPage])

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fafafa' }}>
      {/* Sidebar */}
      <ProductFilter filters={filters} />
      {/* Main Content */}
      <main style={{ flex: 1, padding: 32 }}>
        <Product_menu />
        <h1 style={{ fontSize: 28, marginBottom: 24 }}>
          Buy Blinds and Shades
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 24
          }}
        >
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: '#fff',
                borderRadius: 8,
                boxShadow: '0 1px 4px #eee',
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <ImageLoader
                src={img_url + product.imageKey}
                alt={product.name}
                width={200}
                height={200}
                style={{
                  objectFit: 'cover',
                  borderRadius: 4,
                  marginBottom: 12
                }}
              />
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                {product.name}
              </div>
              <div style={{ color: '#888', fontSize: 14, marginBottom: 4 }}>
                {product.description}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: '#e67e22',
                  fontWeight: 700,
                  marginBottom: 4
                }}
              >
                <span
                  style={{
                    textDecoration: 'line-through',
                    color: '#bbb',
                    fontSize: 14,
                    marginRight: 8
                  }}
                >
                  {product.oldPrice}
                </span>
                {product.price}{' '}
                <span style={{ fontSize: 12, color: '#27ae60', marginLeft: 4 }}>
                  {product.discount}% OFF
                </span>
              </div>
              <div style={{ marginTop: 8 }}>
                {/* Simple rating circles */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: i <= 4 ? '#f39c12' : '#eee',
                      marginRight: 2
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                margin: '0 4px',
                padding: '6px 14px',
                border: '1px solid #eee',
                background: page === currentPage ? '#e67e22' : '#fff',
                color: page === currentPage ? '#fff' : '#000',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: page === currentPage ? 700 : 400
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

function ImageLoader({
  src,
  alt,
  width,
  height,
  style
}: {
  src: string
  alt: string
  width: number
  height: number
  style?: React.CSSProperties
}) {
  return (
    <div style={{ position: 'relative', width, height }}>
      <img src={src} alt={alt} width={width} height={height} style={style} />
    </div>
  )
}
