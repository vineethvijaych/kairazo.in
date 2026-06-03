
import { useState } from 'react';
import { PAGE_PRICES } from '../utils/constants';

export const useProjectEstimator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pages: 3,
    features: []
  });

  const toggleFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.find(f => f.id === feature.id)
        ? prev.features.filter(f => f.id !== feature.id)
        : [...prev.features, feature]
    }));
  };

  const calculatePrice = () => {
    const basePrice = PAGE_PRICES[formData.pages] || 14999;
    const featuresTotal = formData.features.reduce((sum, f) => sum + f.price, 0);
    const min = basePrice + featuresTotal;
    const max = min + 3000;
    return { min, max, range: `₹${min.toLocaleString()} - ₹${max.toLocaleString()}` };
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', mobile: '', pages: 3, features: [] });
  };

  return { formData, toggleFeature, calculatePrice, updateField, resetForm };
};
