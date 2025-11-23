import React from 'react'
export default function Text({ text }) {
  return <div className="aem-text" dangerouslySetInnerHTML={{ __html: text }} />
}
