import React from 'react'
import ProductItem from './ProductItem'

/**
 * ProductList - recibe products (array) y callbacks onDelete, onEdit.
 * Muestra una tabla responsiva con los productos.
 */
export default function ProductList({ products, onDelete, onEdit }) {
  if (!products || products.length === 0) {
    return <p>No hay productos aún. Crea uno usando el formulario.</p>
  }

  return (
    <section className="product-list">
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <ProductItem key={p.id} product={p} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
