import React from 'react'

export interface ProductFilterProps {
  filters: {
    categories: string[]
    subcategories: string[]
    colors: string[]
    brands: string[]
    roomTypes: string[]
    collections: string[]
    availability: string[]
  }
  onChange?: (filter: string, value: string | number | boolean) => void
}

export default function ProductFilter({
  filters,
  onChange
}: ProductFilterProps) {
  return (
    <aside
      style={{
        width: 260,
        background: '#fff',
        padding: 24,
        borderRight: '1px solid #eee'
      }}
    >
      <h3 style={{ fontSize: 18, marginBottom: 16 }}>Filter</h3>
      {/* Size Filter */}
      <div style={{ marginBottom: 24 }}>
        <strong>Size</strong>
        <div style={{ fontSize: 13, margin: '8px 0' }}>
          Width:{' '}
          <input
            type="range"
            min="50"
            max="300"
            style={{ width: 120, margin: '0 8px' }}
            onChange={
              onChange ? (e) => onChange('width', e.target.value) : undefined
            }
          />
          Height:{' '}
          <input
            type="range"
            min="50"
            max="300"
            style={{ width: 120, margin: '0 8px' }}
            onChange={
              onChange ? (e) => onChange('height', e.target.value) : undefined
            }
          />
        </div>
      </div>
      {/* Availability */}
      <div style={{ marginBottom: 24 }}>
        <strong>Availability</strong>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filters.availability.map((avail) => (
            <li key={avail} style={{ margin: '8px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 8 }} /> {avail}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Category */}
      <div style={{ marginBottom: 24 }}>
        <strong>Category</strong>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filters.categories.map((cat) => (
            <li key={cat} style={{ margin: '8px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 8 }} /> {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Subcategory */}
      <div style={{ marginBottom: 24 }}>
        <strong>Sub Category</strong>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filters.subcategories.map((subcat) => (
            <li key={subcat} style={{ margin: '8px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 8 }} /> {subcat}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Color */}
      <div style={{ marginBottom: 24 }}>
        <strong>Color</strong>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {filters.colors.map((color) => (
            <li key={color} style={{ margin: '4px 8px 4px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 4 }} /> {color}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Collection */}
      <div style={{ marginBottom: 24 }}>
        <strong>Collection</strong>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filters.collections.map((col) => (
            <li key={col} style={{ margin: '8px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 8 }} /> {col}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Brand */}
      <div style={{ marginBottom: 24 }}>
        <strong>Brand</strong>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filters.brands.map((brand) => (
            <li key={brand} style={{ margin: '8px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 8 }} /> {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Room Type */}
      <div style={{ marginBottom: 24 }}>
        <strong>Room Type</strong>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filters.roomTypes.map((room) => (
            <li key={room} style={{ margin: '8px 0' }}>
              <label>
                <input type="checkbox" style={{ marginRight: 8 }} /> {room}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
