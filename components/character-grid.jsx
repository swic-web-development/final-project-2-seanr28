import Card from '/components/Card'

export default function CharacterGrid({ character }) {
  const hasCharacter = Array.isArray(character) && character.length > 0

  if (hasCharacter) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {character.map((character) => (
          <Card character={character} key={character.uid} />
        ))}
      </div>
    )
  }

  return <p className="text-center text-xl font-semibold">No characters found.</p>
}
