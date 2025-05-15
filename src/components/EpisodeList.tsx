import { Episode } from "@/types/interface";
import { EpisodeCard } from "./EpisodeCard";


interface EpisodeGridSectionProps {
  episodes1: Episode[];
  episodes2: Episode[];
  sharedEpisodes: Episode[];
}

const EpisodeList: React.FC<EpisodeGridSectionProps> = ({
  episodes1,
  episodes2,
  sharedEpisodes,
}) => {
  return (
    <>
      <EpisodeCard
        title="Character #1 - Only Episodes"
        episodes={episodes1}
      />
      <EpisodeCard
        title="Character #1 & #2 - Shared Episodes"
        episodes={sharedEpisodes}
      />
      <EpisodeCard
        title="Character #2 - Only Episodes"
        episodes={episodes2}
      />
    </>
  );
};

export default EpisodeList;