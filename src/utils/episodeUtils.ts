import { Character, Episode } from "@/types/interface";
import { fetchCharacterEpisodes, fetchEpisodesDetails } from "@/lib/api";

export const loadCharacterEpisodes = async (
  character: Character | null,
  setEpisodes: (episodes: Episode[]) => void
) => {
  try {
    if (character) {
      const episodeIds = await fetchCharacterEpisodes(character.id);
      const episodes = await fetchEpisodesDetails(episodeIds);
      setEpisodes(episodes);
    } else {
      setEpisodes([]);
    }
  } catch (error) {
    console.error("Error loading episodes:", error);
    setEpisodes([]);
  }
};

export const loadSharedEpisodes = async (
  character1: Character | null,
  character2: Character | null,
  setSharedEpisodes: (episodes: Episode[]) => void
) => {
  try {
    if (character1 && character2) {
      const episodeIds1 = await fetchCharacterEpisodes(character1.id);
      const episodeIds2 = await fetchCharacterEpisodes(character2.id);

      const sharedIds = episodeIds1.filter((id: number) => episodeIds2.includes(id));
      const sharedEpisodes = await fetchEpisodesDetails(sharedIds);
      setSharedEpisodes(sharedEpisodes);
    } else {
      setSharedEpisodes([]);
    }
  } catch (error) {
    console.error("Error loading shared episodes:", error);
    setSharedEpisodes([]);
  }
};
