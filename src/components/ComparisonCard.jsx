import React from "react";
import { Cpu, Monitor, Database, Sparkles } from "lucide-react"; // icons

function ComparisonCard({ phone }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-[320px]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">{phone.device}</h2>
          <p className="text-sm text-gray-500">{phone.brand}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">${phone.price}</p>
          <span className="mt-1 inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
            flagship
          </span>
        </div>
      </div>

      {/* Score Box */}
      <div className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">AnTuTu Score</p>
        <h3 className="text-3xl font-bold">{phone.totalscore.toLocaleString()}</h3>
        <p className="text-xs text-gray-400 mt-1">
          Exceptional Performance - Flagship tier
        </p>
      </div>

      {/* Benchmarks */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-1">
          <Cpu size={14} className="text-blue-500" />{" "}
          <span>CPU: {phone.cpu.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Monitor size={14} className="text-green-500" />{" "}
          <span>GPU: {phone.gpu.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Database size={14} className="text-purple-500" />{" "}
          <span>Memory: {phone.mem.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Sparkles size={14} className="text-orange-500" />{" "}
          <span>UX: {phone.ux.toLocaleString()}</span>
        </div>
      </div>

      {/* Specs */}
      <div className="mt-4 text-sm space-y-1">
        <p>
          <span className="text-gray-500">Processor:</span>{" "}
          <span className="font-medium">{phone.cpuName}</span>
        </p>
        <p>
          <span className="text-gray-500">RAM:</span>{" "}
          <span className="font-medium">{phone.ram}</span>
        </p>
        <p>
          <span className="text-gray-500">Battery:</span>{" "}
          <span className="font-medium">{phone.battery}</span>
        </p>
        <p>
          <span className="text-gray-500">Camera:</span>{" "}
          <span className="font-medium">{phone.camera}</span>
        </p>
      </div>

      {/* AI Insights */}
      <div className="mt-4 space-y-2">
        {phone.insights?.map((insight, i) => (
          <div
            key={i}
            className="p-2 text-xs bg-gray-50 rounded-md border border-gray-100"
          >
            {insight}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {phone.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Compare Button */}
      <button className="mt-4 w-full py-2 border rounded-md text-gray-700 hover:bg-gray-50">
        Compare
      </button>
    </div>
  );
}

export default ComparisonCard;
