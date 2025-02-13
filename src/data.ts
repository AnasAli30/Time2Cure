import harsh from "./img/harsh.jpg"
import sruti from "./img/sruti.jpg"
export const workshops = [
  {
    id: '1',
    title: 'Wellness Workshop',
    description: 'Focus on overall wellness and healing through traditional practices',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800',
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800'
    ]
  },
  {
    id: '2',
    title: 'Women\'s Health Workshop',
    description: 'Specialized sessions for women\'s wellness and health',
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1516526995003-435ccce2be97?w=800',
      'https://images.unsplash.com/photo-1599447421399-458d041f37dd?w=800'
    ]
  }
];

export const team = [
  {
    name: 'Shruti',
    role: 'Founder',
    image: sruti,
    education: [
      'Bachelor\'s in Yoga and Naturopathy',
      'Master\'s in Yoga',
      'Certificate Course in Panchkarma and Marma',
      '200 hours Teacher Training from Rishikesh Yoga Association'
    ],
    expertise: ['Women\'s wellness', 'Teenager health', 'Senior citizen care', 'Panchkarma Therapy'],
    bio: 'Born and brought up in Haridwar, Shruti is the founder of MannYoga & Wellness Centre in Dehradun. With deep knowledge in Yoga, Ayurveda, Marma, and Panchkarma, she specializes in treating various conditions without medication.'
  },
  {
    name: 'Harsh Sharma',
    role: 'Co-founder',
    image: harsh,
    education: [
      'BSc. in Yoga Science',
      'Certificate Course in Panchkarma and Marma'
    ],
    expertise: ['Marma', 'Panchkarma'],
    bio: 'From Dehradun, Harsh is the co-founder of MannYoga & Wellness Center. He specializes in Marma and Panchkarma, focusing on healing through Indian traditional wisdom and mindfulness.'
  }
];