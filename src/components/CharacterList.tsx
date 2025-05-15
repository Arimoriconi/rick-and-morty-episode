import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Character } from "@/types/interface";
import { fetchCharacters } from "@/lib/api";
import Pagination from "./Pagination";

interface CharacterListProps {
  setSelectedCharacter: (character: Character) => void;
  section: string;
  selectedCharacter: Character | null;
}

export default function CharacterList({ setSelectedCharacter, section, selectedCharacter }: CharacterListProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCharacters(page).then((data) => {
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    });
  }, [page]);

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-semibold text-white mb-4 text-${section === "Character #1" ? "left" : "right"}`}>{section}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharacterCard
            setSelectedCharacter={setSelectedCharacter}
            selectedCharacter={selectedCharacter}
            character={character}
          />
        ))}
      </div>

      {/* Paginación */}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
