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
  const [activeItem, setActiveItem] = useState<TimelineItem | null>(null);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Timeline Bar */}
      <div className="overflow-x-auto border-b border-gray-300 py-6">
        <div className="flex space-x-12 px-6 min-w-max">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`cursor-pointer flex flex-col items-center transition-all duration-200 ${
                activeItem?.id === item.id
                  ? "text-red-600 scale-110"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full mb-2 ${
                  activeItem?.id === item.id
                    ? "bg-red-600"
                    : "bg-gray-400"
                }`}
              />

              {/* Date */}
              <span className="text-sm font-medium">{item.date}</span>

              {/* Title */}
              <span className="text-xs text-center mt-1 max-w-[100px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="flex-1 p-6">
        {activeItem ? (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-semibold mb-2">
              {activeItem.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {activeItem.date}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {activeItem.description}
            </p>

            {/* Diagram placeholder */}
            {activeItem.diagram && (
              <div className="border rounded-xl p-4 bg-gray-50">
                <img
                  src={activeItem.diagram}
                  alt={activeItem.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-20">
            Select a moment in the timeline to explore the architecture
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
