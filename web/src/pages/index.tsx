import React, { useEffect } from 'react'
import user from '@/api/user'
console.log(user)

const App = () => {
  const fetchApi = async () => {
    const data = await user.list({id: 3})
    console.log(data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>hello worlds</div>
  )
}

export default App
