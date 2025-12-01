import React from 'react'

// ProductItem - fila de tabla para un producto individual
export default function ProductItem({ product, onDelete, onEdit }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price.toFixed(2)}</td>
      <td>
        <button className="btn edit" onClick={() => onEdit(product)}>Editar</button>
        <button className="btn delete" onClick={() => onDelete(product.id)}>Eliminar</button>
      </td>
    </tr>
  )
}
