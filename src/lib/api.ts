const BASE_URL = 'https://rickandmortyapi.com/api';


export const fetchCharacters = async (page: number = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};
  
export const fetchCharacterEpisodes = async (characterId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/character/${characterId}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch character with ID ${characterId}`);
    }

    const data = await res.json();
    return data.episode || [];
  } catch (error) {
    console.error('Error fetching character episodes:', error);
    return [];
  }
};

export const fetchEpisodesDetails = async (episodeUrls: string[]) => {
  if (episodeUrls.length === 0) return [];

  const ids = episodeUrls.map(url => url.split('/').pop()).join(',');

  try {
    const res = await fetch(`${BASE_URL}/episode/${ids}`);

    if (!res.ok) {
      throw new Error('Failed to fetch episode details');
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error('Error fetching episode details:', error);
    return [];
  }
};