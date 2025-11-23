import React from 'react'
export default function Hero({ title, description, image }) {
  return (
    <section className="aem-hero">
      {image && <img src={image._path || image.path} alt="" />}
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </section>
  )
}
