import ProductCard from '@/components/product-card';
import BinaryTitle from '@/components/binary-title';
import DiagonalDivider from '@/components/diagonal-divider';
import Navigation from '@/components/navigation';

export const products = [
  // Active Tools
  {
    href: 'tools/char-count',
    icon: 'Type',
    name: 'Character Counter',
    category: 'Text Tools',
    description:
      'Count characters, words, sentences, and paragraphs in your text',
  },

  // Work in Progress Tools
  {
    href: 'tools/time-until',
    icon: 'Clock',
    name: 'Time Until Date',
    category: 'Time Tools',
    description:
      'Calculate how long until any future date/time in years, months, days, hours, minutes, or seconds',
    wip: true,
  },
  {
    href: 'tools/unix',
    icon: 'Calendar',
    name: 'Unix Timestamp Generator',
    category: 'Time Tools',
    description:
      'Generate Unix timestamps and convert between timestamps and human-readable dates',
    wip: true,
  },
  {
    href: 'tools/case-convert',
    icon: 'Type',
    name: 'Case Converter',
    category: 'Text Tools',
    description:
      'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case',
    wip: true,
  },
  {
    href: 'tools/lorem',
    icon: 'FileText',
    name: 'Lorem Ipsum Generator',
    category: 'Text Tools',
    description:
      'Generate placeholder text with options for paragraphs, sentences, or words',
    wip: true,
  },
  {
    href: 'tools/url-encode',
    icon: 'Link',
    name: 'URL Encoder/Decoder',
    category: 'Developer Tools',
    description: 'Encode or decode special characters in URLs',
    wip: true,
  },
  {
    href: 'tools/base64',
    icon: 'Binary',
    name: 'Base64 Encoder/Decoder',
    category: 'Developer Tools',
    description: 'Convert text or data to and from Base64 encoding',
    wip: true,
  },
  // {
  //   href: 'tools/json',
  //   icon: 'Braces',
  //   name: 'JSON Formatter & Validator',
  //   category: 'Developer Tools',
  //   description:
  //     'Prettify and validate JSON data to make it readable and error-free',
  // },

  // Design Tools
  {
    href: 'tools/color-convert',
    icon: 'Palette',
    name: 'Color Converter',
    category: 'Design Tools',
    description:
      'Convert between HEX, RGB, HSL, and CMYK color formats with color picker',
    wip: true,
  },
  {
    href: 'tools/rgba-to-rgb',
    icon: 'Palette',
    name: 'RGBA to RGB Converter',
    category: 'Design Tools',
    description: 'Strip the alpha channel from an RGBA color',
    wip: true,
  },
  {
    href: 'tools/uuid',
    icon: 'Hash',
    name: 'UUID Generator',
    category: 'Developer Tools',
    description: 'Generate universally unique identifiers (UUIDs)',
    wip: true,
  },

  // Security Tools
  // {
  //   href: 'tools/password',
  //   icon: 'Shield',
  //   name: 'Password Generator',
  //   category: 'Security Tools',
  //   description: 'Generate secure, random passwords with customizable options',
  // },
  {
    href: 'tools/qr',
    icon: 'QrCode',
    name: 'QR Code Generator',
    category: 'Utilities',
    description: 'Create QR codes from URLs or text input',
    wip: true,
  },

  // Utility Tools
  {
    href: 'tools/random-number',
    icon: 'Shuffle',
    name: 'Random Number Generator',
    category: 'Utilities',
    description:
      'Generate random numbers within a specified range, with extra rules',
    wip: true,
  },
  {
    href: 'tools/coin-flip',
    icon: 'Dice5',
    name: 'Coin Flip & Dice Roll',
    category: 'Utilities',
    description: 'Simple tools for making random decisions',
    wip: true,
  },
  {
    href: 'tools/age',
    icon: 'Calculator',
    name: 'Age Calculator',
    category: 'Calculators',
    description: 'Calculate age in years, months, and days from birthdate',
    wip: true,
  },
  {
    href: 'tools/world-clock',
    icon: 'Clock',
    name: 'World Clock',
    category: 'Time Tools',
    description: 'Check given time in different timezones around the world',
    wip: true,
  },
  // {
  //   href: 'tools/image-compress',
  //   icon: 'ImageIcon',
  //   name: 'Image Compressor',
  //   category: 'Image Tools',
  //   description: 'Reduce file size of images while maintaining quality',
  // },
  // {
  //   href: 'tools/financial',
  //   icon: 'DollarSign',
  //   name: 'Financial Calculator',
  //   category: 'Calculators',
  //   description: 'Calculate mortgage payments, loan interest, or savings goals',
  // },
  {
    href: 'tools/image-base64',
    icon: 'FileImage',
    name: 'Image to Base64 Converter',
    category: 'Image Tools',
    description: 'Encode images into Base64 strings for embedding',
    wip: true,
  },
  // {
  //   href: 'tools/diff-checker',
  //   icon: 'GitCompare',
  //   name: 'Diff Checker',
  //   category: 'Text Tools',
  //   description: 'Compare two blocks of text and highlight differences',
  // },
  // {
  //   href: 'tools/poll',
  //   icon: 'BarChart3',
  //   name: 'Poll Creator',
  //   category: 'Utilities',
  //   description: 'Quickly create shareable polls and surveys',
  // },
];

const Tools = () => {
  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="tools" />
      <BinaryTitle word="Tools" />
      <div className="border-b border-t soft-grid-border bg-background">
        <div className="max-w-2xl border-x soft-grid-border mx-auto grid grid-cols-1 sm:grid-cols-2">
          {products.map((product, index) => {
            const isRightColumn = index % 2 === 1;

            const isInLastRow =
              index >= products.length - (products.length % 2 === 0 ? 2 : 1);

            let gridPosition = 'soft-grid-border border-b';

            if (!isInLastRow) {
              gridPosition += ' sm:border-b';
            }

            if (!isRightColumn) {
              gridPosition += ' sm:border-r';
            }

            if (isInLastRow) {
              gridPosition += ' sm:border-b-0';
            }

            return (
              <ProductCard
                key={index}
                product={{
                  ...product,
                  gridPosition,
                }}
              />
            );
          })}
        </div>
      </div>
      <DiagonalDivider />
      <div className="border-b soft-grid-border bg-background">
        <div className="max-w-2xl border-x soft-grid-border mx-auto">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 border-2 soft-grid-border rounded-full flex items-center justify-center bg-background">
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              More to come
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              These tools are based on things I frequently search for online. I
              built them for easy access and you might find them useful too...
              <br />
              <br />
              If you think we should improve or add something new, feel free to
              open an PR/Issue on the{' '}
              <a
                href="https://github.com/shanuflash/portfolio"
                className="text-primary hover:underline"
              >
                GitHub repo
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
