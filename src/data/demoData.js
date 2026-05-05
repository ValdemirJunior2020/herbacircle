// /src/data/demoData.js
export const categories = ['Herbal Tea','Sleep','Stress Relief','Gut Health','Immunity','Skin Care','Gardening','Nutrition','General Wellness','Safety Warnings'];

export const topics = ['Immunity Boost','Gut Health','Natural Sleep','Detox Herbs','Women’s Wellness','Herbs at Home','Skin Care','Stress Relief'];

export const experts = [
  { id: 'e1', name: 'Dr. Anya Patel', profession: 'Integrative Medicine Specialist', photoURL: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&q=80' },
  { id: 'e2', name: 'Michael Brown', profession: 'Certified Herbalist', photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' },
  { id: 'e3', name: 'Lisa Nguyen', profession: 'Nutritionist', photoURL: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80' },
  { id: 'e4', name: 'Dr. Rajesh Kumar', profession: 'Ayurvedic Practitioner', photoURL: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=160&q=80' }
];

export const demoPosts = [
  {
    id: 'demo-1',
    title: 'Chamomile and lemon balm nighttime tea discussion',
    content: 'I brewed chamomile and lemon balm before bed. It felt calming for my evening routine. What is your favorite gentle nighttime tea?',
    category: 'Sleep',
    tags: ['chamomile', 'lemon balm', 'sleep'],
    imageUrl: 'https://images.unsplash.com/photo-1597481499666-130f8eb7c9b6?auto=format&fit=crop&w=1200&q=80',
    authorName: 'Sarah Green',
    authorRole: 'member',
    authorVerified: false,
    authorPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    likesCount: 128,
    commentsCount: 24,
    savesCount: 16,
    createdAt: new Date().toISOString()
  },
  {
    id: 'demo-2',
    title: 'Ginger tea for cold-weather comfort',
    content: 'Ginger tea is a warming drink many people enjoy in colder months. Remember that herbs can interact with medications, especially blood thinners.',
    category: 'Immunity',
    tags: ['ginger', 'comfort', 'safety'],
    imageUrl: 'https://images.unsplash.com/photo-1603431778118-a7d212453cf4?auto=format&fit=crop&w=1200&q=80',
    authorName: 'David Herbalist',
    authorRole: 'expert',
    authorVerified: true,
    authorPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    likesCount: 96,
    commentsCount: 14,
    savesCount: 25,
    createdAt: new Date().toISOString()
  },
  {
    id: 'demo-3',
    title: 'Aloe vera skin care discussion',
    content: 'Aloe is often used topically. Patch testing is smart because natural does not always mean safe for every skin type.',
    category: 'Skin Care',
    tags: ['aloe', 'skin', 'patch-test'],
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    authorName: 'Lisa Nguyen',
    authorRole: 'expert',
    authorVerified: true,
    authorPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    likesCount: 71,
    commentsCount: 8,
    savesCount: 12,
    createdAt: new Date().toISOString()
  },
  {
    id: 'demo-4',
    title: 'Gardening herbs at home',
    content: 'Basil, mint, rosemary, and thyme are beginner-friendly herbs to grow in pots near sunlight.',
    category: 'Gardening',
    tags: ['gardening', 'mint', 'basil'],
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    authorName: 'Garden Circle',
    authorRole: 'member',
    authorVerified: false,
    authorPhoto: '',
    likesCount: 62,
    commentsCount: 9,
    savesCount: 22,
    createdAt: new Date().toISOString()
  }
];
