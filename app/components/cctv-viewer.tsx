"use client";

import React, { useState } from "react";
import { CCTVItem } from "../config/cctv-data";

interface CCTVViewerProps {
  cctv: CCTVItem | null;
  onSelect?: () => void;
}

export default function CCTVViewer({ cctv, onSelect }: CCTVViewerProps) {
  const [hasError, setHasError] = useState(false);

  if (!cctv) {
    return (
      <div
        className="aspect-video bg-white border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-blue-600 hover:bg-blue-600/5"
        onClick={onSelect}
      >
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Klik untuk memilih CCTV</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-100 border-b border-slate-200 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-opacity"></span>
          <span className="font-semibold text-sm text-slate-800 truncate">{cctv.name}</span>
        </div>
        {cctv.location && (
          <span className="text-xs text-slate-500 truncate ml-2">{cctv.location}</span>
        )}
      </div>

      {/* Stream Area */}
      <div className="flex-1 min-h-0 relative bg-slate-800">
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500 p-4 text-center bg-slate-100">
            <svg
              className="w-10 h-10 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm">Stream tidak tersedia</p>
            <button
              className="px-4 py-2 text-sm bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setHasError(false)}
            >
              Coba Lagi
            </button>
          </div>
        ) : (
          <iframe
            src={cctv.url}
            title={cctv.name}
            className="absolute inset-0 w-full h-full border-none"
            onError={() => setHasError(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>

      {/* Footer Button */}
      <button
        className="shrink-0 w-full px-3 py-2 text-sm text-blue-600 bg-transparent border-t border-slate-200 hover:bg-blue-50 transition-colors"
        onClick={onSelect}
      >
        Ganti CCTV
      </button>
    </div>
  );
}
