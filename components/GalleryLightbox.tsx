"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryItem {
  url: string;
  caption: string;
}

export function GalleryLightbox({ gallery }: { gallery: GalleryItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
  };

  const next = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % gallery.length);
  };

  return (
    <div>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {gallery.map((item, idx) => {
          const imgSrc = failedImages[item.url] ? "/placeholder-property.svg" : item.url;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => openLightbox(idx)}
              className="group relative h-56 rounded-2xl overflow-hidden bg-slate-200 border border-navy/10 text-left focus:outline-hidden focus:ring-2 focus:ring-amber cursor-pointer"
            >
              <Image
                src={imgSrc}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                onError={() => setFailedImages((prev) => ({ ...prev, [item.url]: true }))}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="p-2.5 rounded-full bg-white/90 text-navy shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-3 pointer-events-none">
                <p className="text-white text-xs font-medium line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Main preview */}
          <div className="relative max-w-5xl w-full h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={
                  failedImages[gallery[selectedIndex].url]
                    ? "/placeholder-property.svg"
                    : gallery[selectedIndex].url
                }
                alt={gallery[selectedIndex].caption}
                fill
                sizes="(max-width: 1280px) 90vw, 1200px"
                onError={() =>
                  setFailedImages((prev) => ({
                    ...prev,
                    [gallery[selectedIndex].url]: true,
                  }))
                }
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm font-medium mt-4 bg-navy/60 px-4 py-2 rounded-lg backdrop-blur-xs">
              {gallery[selectedIndex].caption} ({selectedIndex + 1} of {gallery.length})
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
