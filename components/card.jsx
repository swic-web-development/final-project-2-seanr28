export default function Card({ person }) {
  return (
    <section className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
      <p className="mt-2 text-gray-600">Height: {person.height} cm</p>
      <p className="mt-2 text-gray-600">Mass: {person.mass} kg</p>
      <p className="mt-2 text-gray-600">Hair Color: {person.hair_color}</p>
      <p className="mt-2 text-gray-600">Skin Color: {person.skin_color}</p>
    </section>
  )
}
