// src/data/demoData.js

export const categories = [
  "Herbal Tea",
  "Sleep",
  "Stress Relief",
  "Gut Health",
  "Immunity",
  "Skin Care",
  "Gardening",
  "Nutrition",
  "General Wellness",
  "Safety Warnings",
];

export const topics = [
  "Immunity Boost",
  "Gut Health",
  "Natural Sleep",
  "Detox Herbs",
  "Women’s Wellness",
  "Herbs at Home",
  "Skin Care",
  "Stress Relief",
  "Herbal Tea",
  "Natural Recipes",
];

export const experts = [
  {
    id: "e1",
    name: "Dr. Anya Patel",
    profession: "Integrative Medicine Specialist",
    photoURL:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "e2",
    name: "Michael Brown",
    profession: "Certified Herbalist",
    photoURL:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "e3",
    name: "Lisa Nguyen",
    profession: "Nutritionist",
    photoURL:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "e4",
    name: "Dr. Rajesh Kumar",
    profession: "Ayurvedic Practitioner",
    photoURL:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=160&q=80",
  },
];

const authors = [
  {
    authorName: "Sarah Green",
    authorRole: "member",
    authorVerified: false,
    authorPhoto:
      "https://ui-avatars.com/api/?name=Sarah+Green&background=dcefe3&color=28513f",
  },
  {
    authorName: "David Herbalist",
    authorRole: "expert",
    authorVerified: true,
    authorPhoto:
      "https://ui-avatars.com/api/?name=David+Herbalist&background=cfe8d6&color=28513f",
  },
  {
    authorName: "Lisa Nguyen",
    authorRole: "expert",
    authorVerified: true,
    authorPhoto:
      "https://ui-avatars.com/api/?name=Lisa+Nguyen&background=dcefe3&color=28513f",
  },
  {
    authorName: "Garden Circle",
    authorRole: "member",
    authorVerified: false,
    authorPhoto:
      "https://ui-avatars.com/api/?name=Garden+Circle&background=f4ead7&color=28513f",
  },
  {
    authorName: "Safety Desk",
    authorRole: "expert",
    authorVerified: true,
    authorPhoto:
      "https://ui-avatars.com/api/?name=Safety+Desk&background=f8d7da&color=28513f",
  },
];

const imageKeywords = [
  "herbal-tea",
  "mint-tea",
  "ginger-tea",
  "chamomile-tea",
  "lavender-herbs",
  "fresh-herbs",
  "organic-herbs",
  "natural-remedy",
  "tea-cup",
  "wellness-tea",
  "rosemary-herb",
  "turmeric-drink",
  "aloe-vera",
  "green-smoothie",
  "healthy-food",
  "garden-herbs",
  "lemongrass-tea",
  "hibiscus-tea",
  "cinnamon-tea",
  "herbal-garden",
];

const recipeTemplates = [
  {
    title: "Chamomile & Lemon Balm Nighttime Tea",
    category: "Sleep",
    tags: ["chamomile", "lemon-balm", "sleep", "tea"],
    content:
      "A gentle evening tea idea with chamomile and lemon balm. Community knowledge only — not medical advice. Avoid if allergic to related plants.",
  },
  {
    title: "Fresh Ginger Lemon Comfort Tea",
    category: "Immunity",
    tags: ["ginger", "lemon", "tea", "comfort"],
    content:
      "Fresh ginger slices with lemon in warm water. Ginger may interact with blood thinners or surgery plans, so ask a professional first.",
  },
  {
    title: "Aloe Vera Skin Patch-Test Routine",
    category: "Skin Care",
    tags: ["aloe", "skin", "patch-test"],
    content:
      "Aloe is commonly used topically. Always patch test first and stop if irritation appears. Not for serious burns, wounds, or skin disease.",
  },
  {
    title: "Turmeric Golden Milk",
    category: "General Wellness",
    tags: ["turmeric", "golden-milk", "cinnamon"],
    content:
      "Warm milk or plant milk with turmeric, cinnamon, and a pinch of black pepper. Turmeric can interact with medications.",
  },
  {
    title: "Peppermint After-Meal Tea",
    category: "Gut Health",
    tags: ["peppermint", "digestion", "tea"],
    content:
      "Peppermint tea is a popular after-meal drink. People with reflux may not tolerate peppermint well.",
  },
  {
    title: "Rosemary Lemon Infused Water",
    category: "Nutrition",
    tags: ["rosemary", "lemon", "infused-water"],
    content:
      "A refreshing infused water with rosemary and lemon slices. Keep it as a wellness drink, not a medical treatment.",
  },
  {
    title: "Lavender Calm Sachet",
    category: "Stress Relief",
    tags: ["lavender", "aroma", "calm"],
    content:
      "Dried lavender in a cloth sachet can add a calming scent to a drawer or pillow area. Avoid if fragrance triggers allergies.",
  },
  {
    title: "Cucumber Mint Hydration Jar",
    category: "Nutrition",
    tags: ["cucumber", "mint", "hydration"],
    content:
      "Add cucumber slices and mint leaves to cold water for a fresh drink. Wash herbs well and refrigerate safely.",
  },
  {
    title: "Honey Lemon Thyme Tea",
    category: "Herbal Tea",
    tags: ["thyme", "honey", "lemon", "tea"],
    content:
      "Steep thyme, add lemon, and sweeten lightly with honey. Do not give honey to children under 1 year old.",
  },
  {
    title: "Hibiscus Iced Tea",
    category: "Herbal Tea",
    tags: ["hibiscus", "iced-tea", "summer"],
    content:
      "Hibiscus makes a bright tart tea. It may not be suitable for everyone, including some people on blood pressure medication.",
  },
  {
    title: "Fennel Seed Tea",
    category: "Gut Health",
    tags: ["fennel", "tea", "gut-health"],
    content:
      "Crushed fennel seeds can be steeped as an aromatic after-meal tea. Ask a professional first if pregnant, nursing, or taking medication.",
  },
  {
    title: "Oatmeal Honey Face Mask",
    category: "Skin Care",
    tags: ["oatmeal", "honey", "face-mask"],
    content:
      "Ground oats and honey are often used in gentle DIY skin routines. Patch test and avoid if you have allergy concerns.",
  },
  {
    title: "Basil Pesto Garden Bowl",
    category: "Nutrition",
    tags: ["basil", "pesto", "nutrition"],
    content:
      "Fresh basil, olive oil, garlic, nuts, and greens can make a bright garden bowl. Check allergies before using nuts.",
  },
  {
    title: "Nettle Tea Education",
    category: "Safety Warnings",
    tags: ["nettle", "safety", "tea"],
    content:
      "Nettle tea is discussed in many wellness communities. It can interact with medications and is not appropriate for everyone.",
  },
  {
    title: "Cinnamon Apple Herbal Simmer",
    category: "General Wellness",
    tags: ["cinnamon", "apple", "aroma"],
    content:
      "Simmer apple slices, cinnamon, and orange peel for a cozy kitchen aroma. Do not ingest essential oils.",
  },
  {
    title: "Lemon Balm Sun Tea",
    category: "Herbal Tea",
    tags: ["lemon-balm", "tea", "food-safety"],
    content:
      "Lemon balm tea can be refreshing. Prepare and store safely to avoid bacterial growth, especially with sun tea methods.",
  },
  {
    title: "Parsley Lemon Salad Topper",
    category: "Nutrition",
    tags: ["parsley", "lemon", "salad"],
    content:
      "Chopped parsley, lemon, olive oil, and a pinch of salt can brighten salads. Keep it food-focused and safe.",
  },
  {
    title: "Calendula Oil Discussion",
    category: "Skin Care",
    tags: ["calendula", "skin", "oil"],
    content:
      "Calendula-infused oil is popular for topical routines. Patch test, avoid open wounds, and ask a professional for skin conditions.",
  },
  {
    title: "Sage and Honey Tea Safety Note",
    category: "Safety Warnings",
    tags: ["sage", "tea", "safety"],
    content:
      "Sage tea is aromatic, but sage is not suitable for everyone and should not be overused.",
  },
  {
    title: "Mint Lime Cooling Drink",
    category: "General Wellness",
    tags: ["mint", "lime", "drink"],
    content:
      "Muddle mint with lime and sparkling water for a fresh alcohol-free drink. Great for community recipe sharing.",
  },
  {
    title: "Rose Hip Tea",
    category: "Herbal Tea",
    tags: ["rosehip", "tea", "vitamin-c"],
    content:
      "Rose hips are often used for tart herbal tea. Check medication interactions and allergies before adding any herb regularly.",
  },
  {
    title: "Garlic Herb Soup Base",
    category: "Nutrition",
    tags: ["garlic", "soup", "thyme"],
    content:
      "Garlic, onion, parsley, thyme, and vegetable broth can make a comforting soup base. This is a food recipe, not medical advice.",
  },
  {
    title: "Eucalyptus Steam Safety Reminder",
    category: "Safety Warnings",
    tags: ["eucalyptus", "steam", "safety"],
    content:
      "Some people use aromatic steam, but eucalyptus oil can be unsafe if misused and should not be swallowed.",
  },
  {
    title: "Dandelion Leaf Salad",
    category: "Nutrition",
    tags: ["dandelion", "greens", "salad"],
    content:
      "Young dandelion greens can be used in salads when correctly identified and safely sourced. Avoid chemically treated areas.",
  },
  {
    title: "Raspberry Leaf Tea Education",
    category: "Safety Warnings",
    tags: ["raspberry-leaf", "women-wellness", "safety"],
    content:
      "Raspberry leaf tea is often discussed in women’s wellness spaces. It is not appropriate for everyone.",
  },
  {
    title: "Oregano Olive Oil Food Use",
    category: "Nutrition",
    tags: ["oregano", "olive-oil", "food"],
    content:
      "Fresh oregano in olive oil can flavor food. Do not confuse culinary infused oil with concentrated essential oil products.",
  },
  {
    title: "Lemongrass Tea",
    category: "Herbal Tea",
    tags: ["lemongrass", "tea", "citrus"],
    content:
      "Lemongrass makes a citrusy herbal tea. Use food-grade herbs and consult a professional if pregnant, nursing, or taking medications.",
  },
  {
    title: "Cilantro Lime Rice Bowl",
    category: "Nutrition",
    tags: ["cilantro", "lime", "rice-bowl"],
    content:
      "Cilantro and lime can brighten rice bowls with beans and vegetables. Simple, food-based wellness idea.",
  },
  {
    title: "Mullein Tea Safety Conversation",
    category: "Safety Warnings",
    tags: ["mullein", "tea", "safety"],
    content:
      "Mullein tea appears in herbal communities, but product quality and personal health conditions matter.",
  },
  {
    title: "Coconut Oat Body Scrub",
    category: "Skin Care",
    tags: ["oats", "coconut-oil", "body-care"],
    content:
      "Oats and coconut oil are used in DIY body care. Avoid slippery shower floors, patch test, and avoid irritated skin.",
  },
  {
    title: "Parsley Mint Tabouli",
    category: "Nutrition",
    tags: ["parsley", "mint", "tabouli"],
    content:
      "A fresh tabouli-style salad with parsley, mint, lemon, tomato, cucumber, and grains. Adjust for gluten sensitivity.",
  },
  {
    title: "Valerian Root Tea Warning",
    category: "Safety Warnings",
    tags: ["valerian", "sleep", "safety"],
    content:
      "Valerian is often discussed for sleep, but it can cause drowsiness and interact with alcohol, sedatives, or medications.",
  },
  {
    title: "Tulsi Holy Basil Tea",
    category: "Herbal Tea",
    tags: ["tulsi", "holy-basil", "tea"],
    content:
      "Tulsi tea is used in many wellness traditions. Ask a professional before regular use with pregnancy, medication, or conditions.",
  },
  {
    title: "Herbal Bath Soak With Lavender",
    category: "Stress Relief",
    tags: ["lavender", "bath", "oatmeal"],
    content:
      "A relaxing bath idea with dried lavender and oatmeal in a tied muslin bag. Avoid if fragrance or botanicals irritate your skin.",
  },
  {
    title: "Cardamom Cinnamon Tea",
    category: "Herbal Tea",
    tags: ["cardamom", "cinnamon", "tea"],
    content:
      "Cardamom and cinnamon can make a warm spiced tea. Keep portions food-like and ask before using herbs therapeutically.",
  },
  {
    title: "Plantain Leaf Salve Discussion",
    category: "Safety Warnings",
    tags: ["plantain-leaf", "salve", "safety"],
    content:
      "Plantain leaf is discussed in folk herbalism. Proper identification matters. Do not use on serious wounds or infections.",
  },
  {
    title: "Blueberry Mint Smoothie",
    category: "Nutrition",
    tags: ["blueberry", "mint", "smoothie"],
    content:
      "Blend blueberries, mint, yogurt or plant milk, and ice for a refreshing smoothie. Adjust for allergies and dietary needs.",
  },
  {
    title: "Marshmallow Root Tea Education",
    category: "Gut Health",
    tags: ["marshmallow-root", "tea", "safety"],
    content:
      "Marshmallow root tea is discussed for soothing routines, but it may affect medication absorption.",
  },
  {
    title: "Rosemary Roasted Potatoes",
    category: "Nutrition",
    tags: ["rosemary", "potatoes", "food"],
    content:
      "Roast potatoes with rosemary, olive oil, garlic, and black pepper. A simple culinary herb recipe for the community.",
  },
  {
    title: "Moringa Powder Smoothie Note",
    category: "Safety Warnings",
    tags: ["moringa", "supplements", "safety"],
    content:
      "Moringa powder is popular, but supplements can interact with medications or health conditions.",
  },
];

const variations = [
  "Beginner",
  "Simple",
  "Family",
  "Garden",
  "Fresh",
];

function makeImageUrl(index) {
  const keyword = imageKeywords[index % imageKeywords.length];
  return `https://source.unsplash.com/1200x800/?${keyword},organic,natural,herbs&sig=${index}`;
}

function makePost(index) {
  const template = recipeTemplates[index % recipeTemplates.length];
  const author = authors[index % authors.length];
  const variation = variations[Math.floor(index / recipeTemplates.length) % variations.length];
  const number = index + 1;

  return {
    id: `recipe-${number}`,
    title: `${variation} ${template.title}`,
    content: `${template.content} Community knowledge only — not medical advice. Always consult a licensed healthcare professional before using herbs, supplements, or natural remedies.`,
    category: template.category,
    tags: [...template.tags, "natural", "herbacircle"],
    imageUrl: makeImageUrl(index),
    authorName: author.authorName,
    authorRole: author.authorRole,
    authorVerified: author.authorVerified,
    authorPhoto: author.authorPhoto,
    likesCount: 20 + ((index * 7) % 180),
    commentsCount: 2 + ((index * 3) % 45),
    savesCount: 5 + ((index * 5) % 90),
    reportsCount: 0,
    hidden: false,
    createdAt: new Date(Date.now() - index * 3600000).toISOString(),
  };
}

export const demoPosts = Array.from({ length: 200 }, (_, index) =>
  makePost(index)
);

export const demoRecipes = demoPosts;