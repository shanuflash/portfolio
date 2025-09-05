'use client';

import Navigation from '@/components/ui/navigation';
import BinaryTitle from '@/components/ui/binary-title';
import DiagonalDivider from '@/components/ui/diagonal-divider';
import { useState, useMemo } from 'react';

const CharCount = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const characters = text.replace(/\n/g, '').length;
    const charactersNoSpaces = text
      .replace(/\n/g, '')
      .replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const spaces = (text.match(/ /g) || []).length;
    const sentences =
      text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length;
    const paragraphs =
      text.trim() === ''
        ? 0
        : text.split(/\n\s*\n/).filter((p) => p.trim() !== '').length;

    const totalSeconds = text.trim() === '' ? 0 : Math.ceil(words / (200 / 60));
    const readingMinutes = Math.floor(totalSeconds / 60);
    const readingSecondsRemainder = totalSeconds % 60;
    const readingTimeFormatted =
      readingMinutes > 0
        ? `${readingMinutes}m ${readingSecondsRemainder}s`
        : `${readingSecondsRemainder}s`;

    const wordFrequency = [];
    if (text.trim() !== '') {
      const wordMap = new Map();
      const cleanWords = text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter((word) => word.length > 0);

      cleanWords.forEach((word) => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
      });

      wordFrequency.push(
        ...Array.from(wordMap.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 20)
      );
    }

    return {
      characters,
      charactersNoSpaces,
      words,
      spaces,
      sentences,
      paragraphs,
      readingTime: readingTimeFormatted,
      readingMinutes,
      readingSeconds: readingSecondsRemainder,
      wordFrequency,
    };
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClearText = () => {
    setText('');
  };

  const handleCopyStats = () => {
    const statsText = `Characters: ${stats.characters}\nCharacters (no spaces): ${stats.charactersNoSpaces}\nWords: ${stats.words}\nSpaces: ${stats.spaces}\nSentences: ${stats.sentences}\nParagraphs: ${stats.paragraphs}\nReading Time: ${stats.readingTime}`;
    navigator.clipboard.writeText(statsText);
  };

  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="tools" />
      <BinaryTitle word="Character Counter" />

      <div className="border-b border-t border-gray-200 bg-background">
        <div className="max-w-2xl border-x border-gray-200 mx-auto">
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Enter your text
                </label>
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  className="w-full h-48 p-3 border border-gray-200 rounded-md bg-background text-foreground text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  placeholder="Type or paste your text here to count characters, words, sentences, and paragraphs..."
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.characters}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Characters
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.charactersNoSpaces}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Characters (no spaces)
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.words}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Words
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.spaces}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Spaces
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.sentences}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Sentences
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.paragraphs}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Paragraphs
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stats.readingTime}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Reading Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DiagonalDivider />

      <div className="border-b border-gray-200 bg-background">
        <div className="max-w-2xl border-x border-gray-200 mx-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Additional Features
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Clear all text</span>
                <button
                  onClick={handleClearText}
                  className="px-4 py-2 text-sm border border-gray-200 rounded-md text-foreground hover:bg-muted transition-colors"
                >
                  Clear
                </button>
              </div>

              {/* Copy Stats */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Copy statistics</span>
                <button
                  onClick={handleCopyStats}
                  className="px-4 py-2 text-sm border border-gray-200 rounded-md text-foreground hover:bg-muted transition-colors"
                >
                  Copy Stats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DiagonalDivider />

      {/* Word Frequency Section */}

      <div className="border-b border-gray-200 bg-background">
        <div className="max-w-2xl border-x border-gray-200 mx-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Word Frequency
            </h2>
            {stats.wordFrequency.length === 0 ? (
              <div className="text-sm text-muted-foreground text-center py-8">
                Enter some text to see word frequency analysis
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground mb-4">
                  Top {stats.wordFrequency.length} most frequent words:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stats.wordFrequency.map(([word, count], index) => (
                    <div
                      key={word}
                      className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-background"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground w-6 text-center">
                          {index + 1}
                        </span>
                        <span className="text-sm font-mono text-foreground">
                          {word}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">
                          {count}
                        </span>
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-foreground rounded-full"
                            style={{
                              width: `${(count / stats.wordFrequency[0][1]) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharCount;
