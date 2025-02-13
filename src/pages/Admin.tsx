import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, Upload, Loader } from 'lucide-react';

interface WorkshopForm {
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

const initialForm: WorkshopForm = {
  title: '',
  description: '',
  coverImage: '',
  images: []
};

export default function Admin() {
  const [form, setForm] = useState<WorkshopForm>(initialForm);
  const [isUploading, setIsUploading] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // TODO: Implement actual upload logic with Supabase
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsUploading(false);
    setForm(initialForm);
    setPreviewImages([]);
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>, isCover: boolean = false) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          if (isCover) {
            setForm(prev => ({ ...prev, coverImage: reader.result }));
          } else {
            setPreviewImages(prev => [...prev, reader.result]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-sage-green">Workshop Management</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Workshop Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-sage-green"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={form.description}
                    onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-sage-green h-32"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Cover Image</h2>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleImagePreview(e, true)}
                  className="hidden"
                  id="cover-upload"
                />
                <label
                  htmlFor="cover-upload"
                  className="flex items-center justify-center w-full h-48 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-sage-green transition-colors"
                >
                  {form.coverImage ? (
                    <img
                      src={form.coverImage}
                      alt="Cover preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto mb-2" />
                      <span>Upload cover image</span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Gallery Images</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {previewImages.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImagePreview}
                    className="hidden"
                    id="gallery-upload"
                  />
                  <label
                    htmlFor="gallery-upload"
                    className="flex items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-sage-green transition-colors"
                  >
                    <Plus />
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className="w-full bg-sage-green hover:bg-opacity-90 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <>
                  <Loader className="animate-spin" />
                  <span>Uploading...</span>
                </>
              ) : (
                <span>Create Workshop</span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}