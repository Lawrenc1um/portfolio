import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    alt: "Mountain landscape",
    caption: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    alt: "Camera",
    caption: "Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    alt: "Mountains at night",
    caption: "Night Sky",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    alt: "Laptop coding",
    caption: "Tech",
  },
  {
    src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800",
    alt: "Code on screen",
    caption: "Coding",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    alt: "Ocean waves",
    caption: "Ocean",
  },
];

export default function Photos() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Photos</h1>
      <p className="text-gray-500 mb-12">
        Photography is my hobby. Shot with Canon R6 Mark II
      </p>

      {/* Gear */}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-12">
        <h2 className="text-xl font-semibold mb-4">📷 Camera Gear</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Body</p>
            <p className="text-white">Canon EOS R6 Mark II</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Lenses</p>
            <p className="text-white">RF 24-105mm STM, RF 50mm f/1.8</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm mb-2">Wishlist</p>
          <div className="flex gap-2 flex-wrap">
            {["RF 100-500mm", "RF 70-200mm f/4", "RF 14-35mm", "RF 10-20mm"].map(
              (lens) => (
                <span
                  key={lens}
                  className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                >
                  {lens}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden bg-white/5"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-8">
        More photos coming soon...
      </p>
    </div>
  );
}
