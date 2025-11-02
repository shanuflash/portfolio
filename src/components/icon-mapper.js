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
  Twitter,
  Linkedin,
  Code,
  User,
  Mail,
  Instagram,
  MessageSquare,
  Paperclip,
} from 'lucide-react';

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
  Twitter,
  Linkedin,
  Instagram,
  Code,
  User,
  Mail,
  MessageSquare,
  Paperclip,
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
