// Sample artwork data for the gallery
export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  historicalContext: string;
  imageUrl: string;
  thumbnailUrl: string;
  movement: string;
  isPublicDomain: boolean;
  audioGuideUrl?: string;
}

export interface Artist {
  id: string;
  name: string;
  birthYear: string;
  deathYear?: string;
  nationality: string;
  biography: string;
  movements: string[];
  imageUrl: string;
  notableWorks: string[];
}

export interface Gallery {
  id: string;
  name: string;
  description: string;
  style: 'modern' | 'classical' | 'minimalist';
  artworkIds: string[];
  thumbnailUrl: string;
}

// Sample artworks - using placeholder images for now
export const artworks: Artwork[] = [
  {
    id: "starry-night",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    artistId: "van-gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    description: "A swirling night sky over a village, painted during Van Gogh's stay at the Saint-Paul-de-Mausole asylum.",
    historicalContext: "Created during the Post-Impressionist movement, this painting represents Van Gogh's emotional response to the view from his asylum window, blending observation with imagination.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    movement: "Post-Impressionism",
    isPublicDomain: true,
  },
  {
    id: "girl-pearl-earring",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    artistId: "vermeer",
    year: "c. 1665",
    medium: "Oil on canvas",
    dimensions: "44.5 cm × 39 cm",
    description: "A tronie depicting a girl wearing an exotic dress and a large pearl earring, often called the 'Mona Lisa of the North'.",
    historicalContext: "This Dutch Golden Age masterpiece exemplifies Vermeer's mastery of light and his ability to capture intimate, timeless moments.",
    imageUrl: "https://www.johannesvermeerart.org/images/johannes-vermeer-artist-biography.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/400px-1665_Girl_with_a_Pearl_Earring.jpg",
    movement: "Dutch Golden Age",
    isPublicDomain: true,
  },
  {
    id: "great-wave",
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    artistId: "hokusai",
    year: "c. 1831",
    medium: "Woodblock print",
    dimensions: "25.7 cm × 37.8 cm",
    description: "An iconic depiction of towering waves threatening boats near the coast, with Mount Fuji in the background.",
    historicalContext: "Part of the series 'Thirty-six Views of Mount Fuji', this ukiyo-e print became one of the most recognized works of Japanese art globally.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/400px-Tsunami_by_hokusai_19th_century.jpg",
    movement: "Ukiyo-e",
    isPublicDomain: true,
  },
  {
    id: "persistence-memory",
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    artistId: "dali",
    year: "1931",
    medium: "Oil on canvas",
    dimensions: "24 cm × 33 cm",
    description: "Melting watches in a dreamlike landscape, exploring the fluidity of time in the unconscious mind.",
    historicalContext: "A seminal work of Surrealism, this painting reflects Dalí's interest in dreams, psychoanalysis, and the subconscious.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1280",
    thumbnailUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    movement: "Surrealism",
    isPublicDomain: false,
  },
  {
    id: "birth-venus",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    artistId: "botticelli",
    year: "c. 1485",
    medium: "Tempera on canvas",
    dimensions: "172.5 cm × 278.9 cm",
    description: "The goddess Venus emerging from the sea as a fully grown woman, arriving at the shore after her birth.",
    historicalContext: "A masterpiece of the Italian Renaissance, this painting represents the revival of classical mythology and idealized beauty in Western art.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    movement: "Italian Renaissance",
    isPublicDomain: true,
  },
  {
    id: "water-lilies",
    title: "Water Lilies",
    artist: "Claude Monet",
    artistId: "monet",
    year: "1906",
    medium: "Oil on canvas",
    dimensions: "89.9 cm × 94.1 cm",
    description: "A serene depiction of the lily pond in Monet's garden at Giverny, capturing light and reflection.",
    historicalContext: "Part of approximately 250 paintings Monet made of his water garden, representing the pinnacle of Impressionist technique.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/400px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    movement: "Impressionism",
    isPublicDomain: true,
  },
  {
    id: "wanderer-sea-fog",
    title: "Wanderer Above the Sea of Fog",
    artist: "Caspar David Friedrich",
    artistId: "friedrich",
    year: "c. 1818",
    medium: "Oil on canvas",
    dimensions: "94.8 cm × 74.8 cm",
    description: "A man standing on a rocky precipice, gazing over a landscape shrouded in mist and fog.",
    historicalContext: "An icon of German Romanticism, this painting embodies the movement's emphasis on emotion, individualism, and the sublime power of nature.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/400px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    movement: "Romanticism",
    isPublicDomain: true,
  },
  {
    id: "nighthawks",
    title: "Nighthawks",
    artist: "Edward Hopper",
    artistId: "hopper",
    year: "1942",
    medium: "Oil on canvas",
    dimensions: "84.1 cm × 152.4 cm",
    description: "Four figures in a downtown diner late at night, viewed through large glass windows.",
    historicalContext: "Painted during World War II, this iconic American Realist work captures urban isolation and the quiet drama of everyday life.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1280px-Nighthawks_by_Edward_Hopper_1942.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/400px-Nighthawks_by_Edward_Hopper_1942.jpg",
    movement: "American Realism",
    isPublicDomain: true,
  },
  {
    id: "kiss",
    title: "The Kiss",
    artist: "Gustav Klimt",
    artistId: "klimt",
    year: "1907-1908",
    medium: "Oil and gold leaf on canvas",
    dimensions: "180 cm × 180 cm",
    description: "A couple embracing, their bodies entwined and wrapped in elaborate golden robes.",
    historicalContext: "The pinnacle of Klimt's 'Golden Phase', this painting combines symbolism, Art Nouveau, and Byzantine influences in a celebration of love and intimacy.",
    imageUrl: "https://th.bing.com/th/id/OIP.ZuA23iTAHWL8M58YWd0r8AHaIi?w=156&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/400px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    movement: "Art Nouveau",
    isPublicDomain: true,
  },
  {
    id: "sunday-afternoon",
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    artistId: "seurat",
    year: "1884-1886",
    medium: "Oil on canvas",
    dimensions: "207.6 cm × 308 cm",
    description: "Parisians relaxing in a suburban park, rendered in Seurat's innovative pointillist technique.",
    historicalContext: "This monumental work launched Neo-Impressionism and the Pointillist movement, using tiny dots of color to create luminous, vibrating images.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/400px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    movement: "Neo-Impressionism",
    isPublicDomain: true,
  },
];

export const artists: Artist[] = [
  {
    id: "van-gogh",
    name: "Vincent van Gogh",
    birthYear: "1853",
    deathYear: "1890",
    nationality: "Dutch",
    biography: "Vincent Willem van Gogh was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a decade, he created about 2,100 artworks, including around 860 oil paintings.",
    movements: ["Post-Impressionism"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    notableWorks: ["The Starry Night", "Sunflowers", "Café Terrace at Night"],
  },
  {
    id: "vermeer",
    name: "Johannes Vermeer",
    birthYear: "1632",
    deathYear: "1675",
    nationality: "Dutch",
    biography: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life. He is now acknowledged as one of the greatest painters of the Dutch Golden Age.",
    movements: ["Dutch Golden Age", "Baroque"],
    imageUrl:" https://www.johannesvermeerart.org/images/johannes-vermeer-artist-biography.jpg",
    notableWorks: ["Girl with a Pearl Earring", "The Milkmaid", "Girl Reading a Letter at an Open Window"],
  },
  {
    id: "hokusai",
    name: "Katsushika Hokusai",
    birthYear: "1760",
    deathYear: "1849",
    nationality: "Japanese",
    biography: "Katsushika Hokusai was a Japanese artist, ukiyo-e painter and printmaker of the Edo period. He is best known for the woodblock print series Thirty-six Views of Mount Fuji which includes the iconic print The Great Wave off Kanagawa.",
    movements: ["Ukiyo-e"],
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.Ga5LjGG_XwzdRgi9UsmIAwHaIM?rs=1&pid=ImgDetMain&o=7&rm=3",
    notableWorks: ["The Great Wave off Kanagawa", "Fine Wind, Clear Morning", "Thirty-six Views of Mount Fuji"],
  },
  {
    id: "monet",
    name: "Claude Monet",
    birthYear: "1840",
    deathYear: "1926",
    nationality: "French",
    biography: "Oscar-Claude Monet was a French painter and founder of Impressionist painting who is seen as a key precursor to modernism. His ambition of documenting the French countryside led him to adopt a method of painting the same scene many times.",
    movements: ["Impressionism"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
    notableWorks: ["Water Lilies", "Impression, Sunrise", "Woman with a Parasol"],
  },
  {
    id: "klimt",
    name: "Gustav Klimt",
    birthYear: "1862",
    deathYear: "1918",
    nationality: "Austrian",
    biography: "Gustav Klimt was an Austrian symbolist painter and one of the most prominent members of the Vienna Secession movement. Klimt is noted for his paintings, murals, sketches, and other objets d'art, known for their elaborate ornamentation.",
    movements: ["Symbolism", "Art Nouveau", "Vienna Secession"],
    imageUrl: "https://th.bing.com/th/id/OIP.ZuA23iTAHWL8M58YWd0r8AHaIi?w=156&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    notableWorks: ["The Kiss", "Portrait of Adele Bloch-Bauer I", "Tree of Life"],
  },
];

export const galleries: Gallery[] = [
  {
    id: "impressionist-masters",
    name: "Impressionist Masters",
    description: "Experience the revolutionary works that changed how we see light and color",
    style: "classical",
    artworkIds: ["water-lilies", "sunday-afternoon"],
    thumbnailUrl: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800",
  },
  {
    id: "dutch-golden-age",
    name: "Dutch Golden Age",
    description: "Journey through the 17th century's most celebrated artistic achievements",
    style: "minimalist",
    artworkIds: ["girl-pearl-earring"],
    thumbnailUrl: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800",
  },
  {
    id: "modern-expressions",
    name: "Modern Expressions",
    description: "Bold visions that defined 20th-century art",
    style: "modern",
    artworkIds: ["starry-night", "persistence-memory", "nighthawks"],
    thumbnailUrl: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800",
  },
  {
    id: "global-traditions",
    name: "Global Traditions",
    description: "Masterworks from artistic traditions around the world",
    style: "minimalist",
    artworkIds: ["great-wave"],
    thumbnailUrl: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800",
  },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};

export const getGalleryById = (id: string): Gallery | undefined => {
  return galleries.find(gallery => gallery.id === id);
};

export const getArtworksByArtist = (artistId: string): Artwork[] => {
  return artworks.filter(artwork => artwork.artistId === artistId);
};

export const getArtworksByMovement = (movement: string): Artwork[] => {
  return artworks.filter(artwork => artwork.movement.toLowerCase() === movement.toLowerCase());
};

export const searchArtworks = (query: string): Artwork[] => {
  const lowerQuery = query.toLowerCase();
  return artworks.filter(artwork => 
    artwork.title.toLowerCase().includes(lowerQuery) ||
    artwork.artist.toLowerCase().includes(lowerQuery) ||
    artwork.movement.toLowerCase().includes(lowerQuery) ||
    artwork.medium.toLowerCase().includes(lowerQuery)
  );
};
