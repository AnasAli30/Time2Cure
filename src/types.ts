export interface Workshop {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  education: string[];
  expertise: string[];
  bio: string;
}