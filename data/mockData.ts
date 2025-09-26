// Mock data for the African e-learning platform

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  thumbnail: string;
  description: string;
  tags: string[];
  language: string;
  lastUpdated: string;
  isPopular?: boolean;
  isFree?: boolean;
}

export interface Program {
  id: string;
  title: string;
  instructor: string;
  instructorBio: string;
  duration: string;
  price: number;
  maxStudents: number;
  currentStudents: number;
  startDate: string;
  category: string;
  description: string;
  features: string[];
  thumbnail: string;
  schedule: string;
  language: string;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Modern Web Development with React & TypeScript',
    instructor: 'Kwame Asante',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviewCount: 10,
    students: 20,
    duration: '12 hours',
    level: 'Intermediate',
    category: 'Technology & Programming',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    description: 'Master modern web development with React, TypeScript, and best practices. Perfect for African developers looking to build world-class applications.',
    tags: ['React', 'TypeScript', 'JavaScript', 'Frontend'],
    language: 'English',
    lastUpdated: '2024-01-15',
    isPopular: true,
  },
  {
    id: '2',
    title: 'Sustainable Agriculture Techniques for Africa',
    instructor: 'Dr. Amina Hassan',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    price: 0,
    rating: 4.9,
    reviewCount: 567,
    students: 4521,
    duration: '8 hours',
    level: 'Beginner',
    category: 'Agriculture & Farming',
    thumbnail: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=225&fit=crop',
    description: 'Learn sustainable farming techniques specifically designed for African climates and soil conditions.',
    tags: ['Agriculture', 'Sustainability', 'Farming', 'Climate'],
    language: 'English',
    lastUpdated: '2024-01-20',
    isFree: true,
    isPopular: true,
  },
  {
    id: '3',
    title: 'Starting Your Business in Africa: A Complete Guide',
    instructor: 'Chidi Okafor',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    price: 67.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviewCount: 298,
    students: 1834,
    duration: '15 hours',
    level: 'Beginner',
    category: 'Business & Entrepreneurship',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop',
    description: 'Complete guide to starting and scaling a business in African markets, covering legal, financial, and cultural aspects.',
    tags: ['Business', 'Entrepreneurship', 'Startup', 'Africa'],
    language: 'English',
    lastUpdated: '2024-01-10',
  },
  {
    id: '4',
    title: 'Traditional African Medicine & Modern Healthcare',
    instructor: 'Dr. Fatima Al-Rashid',
    instructorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
    price: 45.99,
    rating: 4.6,
    reviewCount: 189,
    students: 923,
    duration: '10 hours',
    level: 'Intermediate',
    category: 'Health & Medicine',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=225&fit=crop',
    description: 'Explore the intersection of traditional African medicine and modern healthcare practices.',
    tags: ['Healthcare', 'Traditional Medicine', 'Medical', 'Culture'],
    language: 'English',
    lastUpdated: '2024-01-05',
  },
  {
    id: '5',
    title: 'Learn Swahili: From Beginner to Conversational',
    instructor: 'Aisha Mwangi',
    instructorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    price: 34.99,
    rating: 4.8,
    reviewCount: 445,
    students: 2156,
    duration: '20 hours',
    level: 'Beginner',
    category: 'Languages',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop',
    description: 'Master Swahili language with native speakers. Perfect for business, travel, and cultural connection.',
    tags: ['Language', 'Swahili', 'Communication', 'Culture'],
    language: 'English/Swahili',
    lastUpdated: '2024-01-18',
    isPopular: true,
  },
  {
    id: '6',
    title: 'Digital Marketing for African Businesses',
    instructor: 'Sarah Osei',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    price: 56.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviewCount: 234,
    students: 1567,
    duration: '14 hours',
    level: 'Intermediate',
    category: 'Business & Entrepreneurship',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
    description: 'Learn digital marketing strategies tailored for African markets and consumer behavior.',
    tags: ['Digital Marketing', 'Business', 'Social Media', 'Strategy'],
    language: 'English',
    lastUpdated: '2024-01-12',
  },
];

export const mockPrograms: Program[] = [
  {
    id: '1',
    title: 'Full-Stack Development Bootcamp',
    instructor: 'Michael Adebayo',
    instructorBio: 'Senior Software Engineer with 10+ years experience in Silicon Valley and Lagos tech scene.',
    duration: '12 weeks',
    price: 899.99,
    maxStudents: 25,
    currentStudents: 18,
    startDate: '2024-02-15',
    category: 'Technology & Programming',
    description: 'Intensive 12-week program to become a full-stack developer with job placement assistance.',
    features: [
      '12 weeks of intensive training',
      'Weekly 1-on-1 mentorship sessions', 
      'Real-world project portfolio',
      'Job placement assistance',
      'Certificate of completion',
      'Lifetime access to materials',
      'Alumni network access',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop',
    schedule: 'Mon-Fri, 6-9 PM WAT',
    language: 'English',
  },
  {
    id: '2', 
    title: 'Agriculture Innovation & Technology Mentorship',
    instructor: 'Dr. Grace Mumbi',
    instructorBio: 'Agricultural scientist and innovation specialist with focus on African farming solutions.',
    duration: '8 weeks',
    price: 567.99,
    maxStudents: 15,
    currentStudents: 12,
    startDate: '2024-02-20',
    category: 'Agriculture & Farming',
    description: '8-week mentorship program focusing on agricultural innovation and modern farming techniques.',
    features: [
      '8 weeks of guided learning',
      'Bi-weekly expert sessions',
      'Farm visit opportunities', 
      'Innovation project guidance',
      'Networking with agritech startups',
      'Certification in AgriTech',
      'Access to funding opportunities',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=225&fit=crop',
    schedule: 'Tuesdays & Thursdays, 7-8:30 PM EAT',
    language: 'English',
  },
];

export const categories = [
  {
    name: 'Technology & Programming',
    icon: '💻',
    courseCount: 234,
    color: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Business & Entrepreneurship',
    icon: '💼',
    courseCount: 189,
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Agriculture & Farming', 
    icon: '🌾',
    courseCount: 156,
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Health & Medicine',
    icon: '🏥',
    courseCount: 134,
    color: 'from-red-500 to-pink-600',
  },
  {
    name: 'Arts & Culture',
    icon: '🎨',
    courseCount: 98,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Languages',
    icon: '🗣️',
    courseCount: 87,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    name: 'Trade Skills',
    icon: '🔧',
    courseCount: 76,
    color: 'from-gray-600 to-gray-800',
  },
];