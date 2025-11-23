import React, { useEffect, useState } from 'react'
import {fetchAemModel, fetchGraphQL} from '../api/aem'
import ComponentMapper from '../components/ComponentMapper'
import Text from "../components/Text";

export default function AemPage() {
  const [model, setModel] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const path = window.__AEM?.resourcePath || window.location.pathname
      const modelPath = path.startsWith('/content') ? path : `/content${path}`
      const  cfPath = 'path=/content/dam/reusable-content/text/simple-text'
      const  variation = 'variation=master'

      try {
        const data = await fetchGraphQL(cfPath, variation)
        setModel(data)
      } catch (e) {
        console.error('Failed to load model', e)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) return <div>Loading</div>
  if (!model) return <div>No model found</div>

  return <Text model={model} />
}
