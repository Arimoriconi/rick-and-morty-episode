'use client';

import { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import EpisodeList from "@/components/EpisodeList";
import { Episode, Character } from "@/types/interface";
import { loadCharacterEpisodes } from "@/utils/episodeUtils";
import { loadSharedEpisodes } from "@/utils/episodeUtils";
import Image from 'next/image';

export default function HomePage() {
  const [selectedCharacter1, setSelectedCharacter1] = useState<Character | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState<Character | null>(null);
  const [episodes1, setEpisodes1] = useState<Episode[]>([]);
  const [episodes2, setEpisodes2] = useState<Episode[]>([]);
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    loadCharacterEpisodes(selectedCharacter1, setEpisodes1);
  }, [selectedCharacter1]);

  useEffect(() => {
    loadCharacterEpisodes(selectedCharacter2, setEpisodes2);
  }, [selectedCharacter2]);

  useEffect(() => {
    loadSharedEpisodes(selectedCharacter1, selectedCharacter2, setSharedEpisodes);
  }, [selectedCharacter1, selectedCharacter2]);
  

  return (
    <main>
      <div className="max-w-7xl mx-auto space-y-12">
      <Image className="justify-self-center mb-0" src="/Title.webp" alt="Rick&Morty" height={500} width={500} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <CharacterList setSelectedCharacter={setSelectedCharacter1} section="Character #1" selectedCharacter={selectedCharacter1} />
          <CharacterList setSelectedCharacter={setSelectedCharacter2} section="Character #2" selectedCharacter={selectedCharacter2} />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 pb-5">
        <EpisodeList
          episodes1={episodes1}
          episodes2={episodes2}
          sharedEpisodes={sharedEpisodes}/>
      </section>
      </div>
    </main>
  );
}
