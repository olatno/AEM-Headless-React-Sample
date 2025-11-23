import React from 'react'
import Text from './Text'
import Hero from './Hero'

const mapping = {
  'myproject/components/text': Text,
  'myproject/components/hero': Hero,
}

export default function ComponentMapper({ model }) {
  const children = model.children || []
  return (
    <>
      {children.map((child, i) => {
        const C = mapping[child.resourceType]
        if (!C) return null
        return <C key={i} {...child} />
      })}
    </>
  )
}
