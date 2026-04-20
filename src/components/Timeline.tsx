import React, { useState } from "react";

type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  diagram?: string;
  category?: "construction" | "history" | "restoration" | "discovery";
};

type Props = {
  items: TimelineItem[];
};

const Timeline: React.FC<Props> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const categoryColors = {
    construction: "bg-amber-500",
    history: "bg-blue-500",
    restoration: "bg-green-500",
    discovery: "bg-purple-500",
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          The Pantheon Timeline
        </h1>
        <p className="text-gray-600">
          Explore the rich history of Rome's most iconic monument
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-200" />

        {/* Items */}
        <div className="space-y-8">
          {items.map((item, index) => {
            const isActive = activeId === item.id;
            const dotColor = item.category
              ? categoryColors[item.category]
              : "bg-amber-500";

            return (
              <div key={item.id} className="relative pl-24">
                {/* Timeline dot with pulse effect */}
                <div className={`absolute -left-3 top-2 w-6 h-6 ${dotColor} rounded-full border-4 border-white shadow-lg transition-all duration-300 ${isActive ? 'scale-125' : ''}`} />

                {/* Card */}
                <div
                  onClick={() =>
                    setActiveId(isActive ? null : item.id)
                  }
                  className={`bg-white rounded-lg shadow-md hover:shadow-xl p-6 cursor-pointer transition-all duration-300 ${
                    isActive ? "ring-2 ring-amber-400" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                          {item.date}
                        </span>
                        {item.category && (
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h2>
                    </div>

                    {/* Toggle icon */}
                    <button
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                      aria-label={isActive ? "Collapse" : "Expand"}
                    >
                      <span
                        className={`text-2xl font-light text-gray-400 transition-transform duration-300 ${
                          isActive ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </div>

                  {/* Expandable content */}
                  {isActive && (
                    <div className="mt-6 space-y-4 animate-fade-in border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>

                      {item.diagram && (
                        <div className="rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                          <img
                            src={item.diagram}
                            alt={item.title}
                            className="w-full h-auto object-cover"
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
    </div>
  );
};

export default Timeline;
