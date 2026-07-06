import { Briefcase } from 'lucide-react';
import {
  Type,
  FileText,
  Hash,
  Link,
  Binary,
  Braces,
  Palette,
  Shuffle,
  Shield,
  QrCode,
  Dice5,
  Calculator,
  Clock,
  ImageIcon,
  DollarSign,
  Calendar,
  FileImage,
  GitCompare,
  BarChart3,
  Github,
  Linkedin,
  Code,
  User,
  Mail,
  Instagram,
  MessageSquare,
  Paperclip,
  Gamepad2,
  MemoryStick,
  Trophy,
  MapPin,
} from 'lucide-react';

function XTwitter({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap = {
  Type,
  FileText,
  Hash,
  Link,
  Binary,
  Braces,
  Palette,
  Shuffle,
  Shield,
  QrCode,
  Dice5,
  Calculator,
  Clock,
  ImageIcon,
  DollarSign,
  Calendar,
  FileImage,
  GitCompare,
  BarChart3,
  Github,
  XTwitter,
  Linkedin,
  Instagram,
  Code,
  User,
  Mail,
  MessageSquare,
  Paperclip,
  Gamepad2,
  MemoryStick,
  Trophy,
  MapPin,
  Briefcase,
};

export function getIcon(iconName, className = '') {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }
  return <IconComponent className={className} />;
}

export default iconMap;
