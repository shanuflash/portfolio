'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Section } from '@/components/layout';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Section padded={false}>
      <div className="p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-background border soft-grid-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all duration-300"
          />
        </div>
      </div>
    </Section>
  );
};

export default SearchBar;
