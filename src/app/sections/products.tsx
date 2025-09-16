import React from 'react'
import ProductCard from '../components/productCard'
import { products } from '../data/products'

const Products = () => {
  return (
    <section id="products" className="px-15 pb-15 pt-20 text-center bg-white">
      <div className="container mx-auto">
        <div className="inline-block">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">Our Products!</h1>
          <div className="h-1.5 -mx-6 bg-gradient-to-r from-blue-500 to-cyan-800 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;