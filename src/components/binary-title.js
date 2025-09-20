'use client';
import { useState } from 'react';
import { TextScramble } from './ui/text-scramble';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

const BinaryTitle = ({ word }) => {
  const [showEnglish, setShowEnglish] = useState(false);

  const binaryWord = word
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');

  return (
    <div className="flex justify-center">
      <div className="max-w-2xl border-x soft-grid-border mx-auto py-8 w-full">
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="text-center font-mono text-sm text-muted-foreground cursor-help"
              onMouseEnter={() => setShowEnglish(true)}
              onMouseLeave={() => setShowEnglish(false)}
            >
              {showEnglish ? (
                <TextScramble>{word}</TextScramble>
              ) : (
                <TextScramble>{binaryWord}</TextScramble>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{word}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
export default BinaryTitle;
