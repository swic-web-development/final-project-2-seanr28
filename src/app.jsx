import Header from '/components/Header'
import CharacterGrid from '/components/character-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const characterNumber = [2, 58, 3, 10, 11, 4, 20, 14, 15]
    async function fetchSelectedCharacters() {
      try {
        const characterPromises = characterNumber.map(async (id) => {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`)

          const data = await response.json()
          return data.result.properties
        })

        const selectedCharacters = await Promise.all(characterPromises)
        setCharacter(selectedCharacters)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSelectedCharacters()
  }, [])

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/space.webp')" }}
    >
      <Header />
      <CharacterGrid character={character} />
    </main>
  )
}
