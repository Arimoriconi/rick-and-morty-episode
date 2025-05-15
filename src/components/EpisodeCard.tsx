import React from "react";
import { Episode } from "@/types/interface";

interface EpisodeListSectionProps {
  title: string;
  episodes: Episode[];
}

export const EpisodeCard: React.FC<EpisodeListSectionProps> = ({ title, episodes }) => {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl shadow-md text-white">
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="overflow-y-auto h-80 pr-2 space-y-5">
      {episodes.length === 0 ? (
        <p className="text-center text-gray-400">No episodes available.</p>
      ) : (
        episodes.map((episode) => (
          <div key={episode.id} className="mb-5">
            <p className="font-semibold">{`${episode.episode} - ${episode.name}`}</p>
            <p className="text-sm text-gray-400">{episode.air_date}</p>
          </div>
        ))
      )}
      </div>
    </div>
  );
};
