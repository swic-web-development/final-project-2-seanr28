import Header from '/components/Header'
import CharacterGrid from '/components/character-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const characterID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 361]
    async function fetchSelectedCharacters() {
      try {
        const characterPromises = characterID.map(async (id) => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          const data = await response.json()
          return data
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
      style={{ backgroundImage: "url('/images/portal.jpg')" }}
    >
      <Header />
      <CharacterGrid character={character} />
    </main>
  )
}
