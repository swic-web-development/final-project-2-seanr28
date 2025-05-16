export default function Card({ character }) {
  return (
    <section className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800">{character.name}</h2>
      <p className="mt-2 text-gray-600">Dead or Alive: {character.status} cm</p>
      <p className="mt-2 text-gray-600">Species: {character.species} kg</p>
      <p className="mt-2 text-gray-600">Type: {character.type}</p>
    </section>
  )
}
