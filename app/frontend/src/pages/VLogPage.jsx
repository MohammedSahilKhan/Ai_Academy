
Action: file_editor create /app/frontend/src/pages/VlogPage.jsx --file-text "import { useState, useEffect } from \"react\";
import { X } from \"lucide-react\";
import axios from \"axios\";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function VlogPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${API}/gallery`);
        setImages(res.data);
      } catch (err) {
        console.error(\"Failed to fetch gallery:\", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Grid size classes for masonry-like layout
  const gridClasses = [
    \"col-span-2 row-span-2\",
    \"col-span-1 row-span-1\",
    \"col-span-1 row-span-1\",
    \"col-span-1 row-span-2\",
    \"col-span-1 row-span-1\",
    \"col-span-1 row-span-1\",
  ];

  return (
    <main data-testid=\"vlog-page\" className=\"pt-20\">
      {/* Header */}
      <section className=\"py-16 lg:py-20 bg-[#F4F4F5]\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <p className=\"text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3\">
            Our Moments
          </p>
          <h1
            className=\"font-['Outfit'] text-4xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A]\"
            data-testid=\"vlog-heading\"
          >
            Life at <span className=\"text-[#FFC107]\">Ai Academy</span>
          </h1>
          <p className=\"mt-4 text-base text-[#0A0A0A]/60 max-w-lg\">
            A glimpse into our classrooms, events, and the vibrant learning environment at Ai Academy.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className=\"py-16 lg:py-24\">
        <div className=\"max-w-7xl mx-auto px-6\">
          {loading ? (
            <div className=\"flex items-center justify-center py-20\" data-testid=\"gallery-loading\">
              <div className=\"w-8 h-8 border-2 border-[#FFC107] border-t-transparent rounded-full animate-spin\" />
            </div>
          ) : (
            <div className=\"grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4\">
              {images.map((img, i) => (
                <div
                  key={img.id}
                  data-testid={`gallery-image-${img.id}`}
                  className={`gallery-item rounded-lg cursor-pointer relative group ${
                    gridClasses[i % gridClasses.length]
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className=\"w-full h-full object-cover rounded-lg\"
                  />
                  <div className=\"absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-colors duration-300 rounded-lg flex items-end p-4\">
                    <p className=\"text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300\">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          data-testid=\"lightbox-overlay\"
          className=\"fixed inset-0 z-50 bg-[#0A0A0A]/90 flex items-center justify-center p-4\"
          onClick={() => setSelectedImage(null)}
        >
          <button
            data-testid=\"lightbox-close-btn\"
            className=\"absolute top-6 right-6 text-white/80 hover:text-white z-10\"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <div className=\"max-w-4xl max-h-[85vh]\" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className=\"max-w-full max-h-[80vh] object-contain rounded-lg\"
            />
            <p className=\"text-white text-center mt-4 text-sm\">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
}
"
Observation: Create successful: /app/frontend/src/pages/VlogPage.jsx