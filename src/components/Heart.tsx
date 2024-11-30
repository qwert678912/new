import React from 'react';
import { Heart as HeartIcon } from 'lucide-react';

export const FloatingHeart = () => {
  return (
    <div className="absolute animate-float">
      <HeartIcon className="text-pink-500 w-6 h-6" />
    </div>
  );
};