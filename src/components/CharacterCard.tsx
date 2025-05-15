import { Character } from "@/types/interface";

interface CharacterCardProps {
  character: Character;
  selectedCharacter: Character | null;
  setSelectedCharacter: (character: Character) => void;
}

export default function CharacterCard({
  character,
  selectedCharacter,
  setSelectedCharacter,
}: CharacterCardProps) {
  const isSelected = selectedCharacter?.id === character.id;

  return (
    <div
      onClick={() => setSelectedCharacter(character)}
      className={`bg-[#1d1d1d] rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
        isSelected ? "ring-4 ring-[rgb(var(--selected-green))]" : ""
      }`}
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{character.name}</h3>
        <p className="text-sm text-gray-400">
          {character.status} - {character.species}
        </p>
      </div>
    </div>
  );
}
