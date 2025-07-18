import React from 'react'

export default function Product_menu() {
  return (
    <nav style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
      <a
        href="/products"
        style={{
          padding: '8px 20px',
          borderRadius: 4,
          background: '#e67e22',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Product with private
      </a>
      <a
        href="/product_api"
        style={{
          padding: '8px 20px',
          borderRadius: 4,
          background: '#2980b9',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Product with Shop Api
      </a>
      <a
        href="/product_oci"
        style={{
          padding: '8px 20px',
          borderRadius: 4,
          background: '#27ae60',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Product with OCI Api
      </a>
      <a
        href="/product_public"
        style={{
          padding: '8px 20px',
          borderRadius: 4,
          background: '#8e44ad',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Product with prublic
      </a>
    </nav>
  )
}
