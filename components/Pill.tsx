// components/Pill.tsx
import React, { useState } from "react";

interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`px-4 py-2 rounded-full border text-sm transition-all 
        ${selected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}
        hover:bg-blue-500 hover:text-white`}
    >
      {label}
    </button>
  );
};

export default Pill;
