import React, { useState } from "react";

type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  diagram?: string;
};

type Props = {
  items: TimelineItem[];
};

const Timeline: React.FC<Props> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">
        The Pantheon Timeline
      </h1>

      <div className="relative border-l border-gray-300 pl-6 space-y-6">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[34px] top-3 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />

              {/* Card */}
              <div
                onClick={() =>
                  setActiveId(isActive ? null : item.id)
                }
                className="bg-white rounded-2xl shadow-md p-5 cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">
                      {item.date}
                    </p>
                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>
                  </div>

                  <span className="text-sm text-gray-400">
                    {isActive ? "–" : "+"}
                  </span>
                </div>

                {/* Expandable content */}
                {isActive && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {item.diagram && (
                      <div className="rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={item.diagram}
                          alt={item.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
