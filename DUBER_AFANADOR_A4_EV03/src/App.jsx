import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Footer from './components/Footer'
import mockData from './data/mockProducts'

/**
 * App principal - maneja estado general de productos.
 * Se utiliza useState para mantener lista local y useEffect
 * para inicializar desde mockData (simula una API).
 */
export default function App() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  // Cargar datos iniciales (simula fetch)
  useEffect(() => {
    setProducts(mockData)
  }, [])

  // Crear o actualizar producto
  const handleSave = (product) => {
    if (product.id) {
      // editar
      setProducts((prev) => prev.map(p => p.id === product.id ? product : p))
    } else {
      // crear: generar id simple
      const newProduct = { ...product, id: Date.now() }
      setProducts(prev => [newProduct, ...prev])
    }
    setEditingProduct(null)
  }

  // Eliminar producto
  const handleDelete = (id) => {
    if (!window.confirm('¿Eliminar el producto?')) return
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  // Editar: pasar producto al formulario
  const handleEdit = (product) => {
    setEditingProduct(product)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container">
      <Header />
      <main>
        <ProductForm onSave={handleSave} editingProduct={editingProduct} />
        <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
      </main>
      <Footer />
    </div>
  )
}
