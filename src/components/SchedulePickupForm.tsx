import React, { useRef, useEffect, useState } from 'react';
import SEOHead from './SEOHead';

const clothingTypes = [
  { value: '', label: 'Select Type' },
  { value: 'shirts', label: 'Shirts' },
  { value: 'pants', label: 'Pants' },
  { value: 'dresses', label: 'Dresses' },
  { value: 'suits', label: 'Suits' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'bridal-gown', label: 'Bridal Gown', highlight: true },
  { value: 'other', label: 'Other' },
];

const AIRTABLE_API_URL = 'https://api.airtable.com/v0/app4P8nvUxwLJQc8j/Pickup%20details';
const AIRTABLE_API_KEY = 'patvboFSu2rvdOdsx.d615b701aca50b80b125ef7cd55452ae19180b1f9f53baa6218ed480552797b9';

// Cloudinary config
const CLOUDINARY_CLOUD_NAME = 'dkeenrdho';
const CLOUDINARY_UPLOAD_PRESET = 'image uploads';

// Helper to sanitize file names for Cloudinary (optional, but Cloudinary is more permissive)
function sanitizeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

const SchedulePickupForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [addImages, setAddImages] = useState('no');
  const [clothingType, setClothingType] = useState('');
  const [images, setImages] = useState<FileList | null>(null);
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const el = formRef.current;
    if (el) {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-8');
        el.classList.add('opacity-100', 'translate-y-0');
      }, 100);
    }
  }, []);

  const showImageInput = clothingType === 'bridal-gown' || addImages === 'yes';
  const imageRequired = clothingType === 'bridal-gown';
  const imageError = touched && imageRequired && (!images || images.length === 0);

  async function uploadImagesToCloudinary(files: FileList) {
    const urls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file, sanitizeFileName(file.name));
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        urls.push(data.secure_url);
      } else {
        throw new Error('Cloudinary upload failed');
      }
    }
    return urls;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    setError(null);
    setSuccess(false);
    setLoading(true);

    // Get form values
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement)?.value;
    const contactMethod = (form.elements.namedItem('contactMethod') as HTMLSelectElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value;
    const address = (form.elements.namedItem('address') as HTMLInputElement)?.value;
    const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement)?.value;

    let imageUrls: string[] = [];
    try {
      if (showImageInput && images && images.length > 0) {
        imageUrls = await uploadImagesToCloudinary(images);
      } else if (imageRequired) {
        setError('Please upload at least one image for Bridal Gown.');
        setLoading(false);
        return;
      }
    } catch (err: any) {
      setError('Image upload failed: ' + err.message);
      setLoading(false);
      return;
    }

    // Prepare data for Airtable
    const airtableData = {
      records: [
        {
          fields: {
            'Full Name': fullName,
            'Email': email,
            'Phone': phone,
            'Preferred method of contact': contactMethod,
            'Image URLs': imageUrls.join(', '),
            'Pickup Address': address,
            'Type of Clothing': clothingType,
            'Additional Notes': notes,
          },
        },
      ],
    };

    try {
      const res = await fetch(AIRTABLE_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error?.message || 'Failed to submit to Airtable');
      }
      setSuccess(true);
      setError(null);
      setLoading(false);
      setTouched(false);
      setImages(null);
      form.reset();
    } catch (err: any) {
      setError('Airtable submission failed: ' + err.message);
      setLoading(false);
    }
  }

  return (
    <>
      <SEOHead 
        title="Dry Cleaning Delivery Services | Jacksonville, FL | A Greener Cleaner"
        description="A Greener Cleaner offers dry cleaning delivery services for your convenience in Jacksonville, FL. Call us today to schedule your pickup!"
        keywords="dry cleaning delivery, schedule pickup, Jacksonville dry cleaning, laundry service, St Johns County, Nocatee, Julington Creek"
        canonicalUrl="https://www.agreenerdrycleaner.com/dry-cleaning-delivery-services"
        ogImage="https://lirp.cdn-website.com/d951d82e/dms3rep/multi/opt/Logo-Open-Graph-1920w.jpg"
      />
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4">
        <div
          ref={formRef}
          className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 opacity-0 translate-y-8"
        >
          <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">Schedule a Pickup</h2>
          {success && (
            <div className="mb-4 p-3 rounded bg-green-100 text-green-800 text-center font-medium">Your request was submitted successfully!</div>
          )}
          {error && (
            <div className="mb-4 p-3 rounded bg-red-100 text-red-800 text-center font-medium">{error}</div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Full Name</label>
              <input name="fullName" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Preferred Contact Method</label>
              <select name="contactMethod" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">Phone</label>
                <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Address</label>
              <input name="address" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition" placeholder="Pickup Address" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Type of Clothing</label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition"
                value={clothingType}
                onChange={e => setClothingType(e.target.value)}
                name="clothingType"
              >
                {clothingTypes.map(type => (
                  <option
                    key={type.value}
                    value={type.value}
                    className={type.highlight ? 'bg-brand-lime text-white font-semibold' : ''}
                    style={type.highlight ? { backgroundColor: '#B9FF66', color: '#1a365d', fontWeight: 600 } : {}}
                  >
                    {type.label}
                  </option>
                ))}
              </select>
              {clothingType === 'bridal-gown' && (
                <div className="mt-2 text-xs text-brand-lime font-semibold">Bridal Gown pickups require at least one image upload.</div>
              )}
            </div>
            {/* Ask if they want to upload images, unless bridal gown is selected */}
            {clothingType !== 'bridal-gown' && (
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">Would you like to upload images of your clothing?</label>
                <div className="flex gap-4 mt-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="addImages"
                      value="yes"
                      checked={addImages === 'yes'}
                      onChange={() => setAddImages('yes')}
                      className="accent-brand-lime"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="addImages"
                      value="no"
                      checked={addImages === 'no'}
                      onChange={() => setAddImages('no')}
                      className="accent-brand-lime"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            )}
            {/* Image upload field, shown if bridal gown or user wants to upload images */}
            {showImageInput && (
              <div>
                <label className="block text-sm font-medium text-brand-navy mb-1">
                  Upload Images {imageRequired && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  required={imageRequired}
                  onChange={e => setImages(e.target.files)}
                  className={`w-full px-4 py-2 rounded-lg border ${imageError ? 'border-red-500' : 'border-gray-200'} focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition`}
                />
                <div className="text-xs text-gray-500 mt-1">
                  It's best if you can upload images of any stain areas.
                  {imageRequired && <span className="block text-red-500 font-medium">At least one image is required for Bridal Gown pickups.</span>}
                </div>
                {imageError && <div className="text-xs text-red-500 mt-1">Please upload at least one image for Bridal Gown.</div>}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Additional Notes (optional)</label>
              <textarea name="notes" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition" rows={3} placeholder="Anything else we should know?" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-brand-lime hover:bg-brand-green text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SchedulePickupForm; 