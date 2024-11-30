import React from 'react';

interface MessageProps {
  text: string;
  delay: string;
}

export const Message: React.FC<MessageProps> = ({ text, delay }) => {
  return (
    <div 
      className="text-lg md:text-xl text-gray-800 font-medium animate-fadeIn"
      style={{ animationDelay: delay }}
    >
      {text}
    </div>
  );
};