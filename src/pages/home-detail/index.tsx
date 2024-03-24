import React from "react"
import { useParams } from "react-router-dom"

export default function HomeDetailPage() {
  const params = useParams()
  const id = params?.id

  return <div>HomeDetailPage {id}</div>
}
