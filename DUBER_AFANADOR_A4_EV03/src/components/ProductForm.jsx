import React, { useState, useEffect } from 'react'

/**
 * ProductForm - formulario controlado para crear y editar productos.
 * Propiedades:
 *  - editingProduct: objeto con datos si se está editando (null para crear)
 *  - onSave: callback(product) al guardar
 *
 * El formulario incluye validación simple y comentarios en el código.
 */
export default function ProductForm({ editingProduct, onSave }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  // Cuando editingProduct cambia, llenar el formulario
  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name || '')
      setDescription(editingProduct.description || '')
      setPrice(editingProduct.price != null ? editingProduct.price : '')
    } else {
      // limpiar formulario
      setName('')
      setDescription('')
      setPrice('')
    }
  }, [editingProduct])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validación básica
    if (!name.trim()) {
      alert('El nombre es obligatorio')
      return
    }
    const priceNum = parseFloat(price) || 0
    const product = {
      id: editingProduct ? editingProduct.id : null,
      name: name.trim(),
      description: description.trim(),
      price: priceNum
    }
    onSave(product)
    // limpiar si se creó nuevo
    if (!editingProduct) {
      setName(''); setDescription(''); setPrice('')
    }
  }

  return (
    <section className="product-form">
      <h2>{editingProduct ? 'Editar producto' : 'Crear producto'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre del producto" />
        </label>
        <label>Descripción
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción breve" />
        </label>
        <label>Precio
          <input value={price} onChange={e => setPrice(e.target.value)} placeholder="0.00" type="number" step="0.01" />
        </label>
        <div className="form-actions">
          <button type="submit" className="btn save">Guardar</button>
        </div>
      </form>
    </section>
  )
}
