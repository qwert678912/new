import React, { useState } from 'react';
import { Heart, Cat } from 'lucide-react';
import { Message } from './components/Message';
import { FloatingHeart } from './components/Heart';

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <FloatingHeart />
          </div>
        ))}
      </div>

      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6 animate-slideUp">
        <div className="flex justify-center">
          <Cat className="w-16 h-16 text-pink-500 animate-bounce" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 animate-fadeIn">
          I'm Sorry 🥺
        </h1>

        <div className="space-y-4 text-center">
          <Message 
            text="I know I messed up, and I really miss your smile..." 
            delay="0.5s"
          />
          <Message 
            text="You mean the world to me 🌎" 
            delay="1s"
          />
          <Message 
            text="And I promise to do better ❤️" 
            delay="1.5s"
          />
        </div>

        <div className="flex justify-center gap-4 animate-pulse">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" 
            alt="Cute Cat" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400" 
            alt="Another Cute Cat" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>

        <button
          onClick={() => setShowMore(true)}
          className="mx-auto block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all transform hover:scale-105 active:scale-95 animate-bounce"
        >
          <span className="flex items-center gap-2">
            Click for More Love <Heart className="w-4 h-4" />
          </span>
        </button>

        {showMore && (
          <div className="animate-fadeIn text-center space-y-4">
            <p className="text-xl text-gray-700">
              You're my favorite person in the whole world! 🌟
            </p>
            <p className="text-lg text-gray-600">
              Let's make more beautiful memories together 💕
            </p>
            <div className="flex justify-center gap-2 text-2xl">
              🐱 💝 🥺 💫 ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;