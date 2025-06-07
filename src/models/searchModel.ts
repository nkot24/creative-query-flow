
import { SearchResult } from "@/types/search";

// Mock data that simulates API responses
const mockDesignPrompts = [
  "modern dashboard UI",
  "clean mobile login screen", 
  "responsive portfolio layout",
  "dark mode interface",
  "eCommerce homepage",
  "minimalist website",
  "material design app",
  "creative landing page",
  "user profile dashboard",
  "settings panel UI"
];

const generateMockResults = (query: string): SearchResult[] => {
  const relevantPrompts = mockDesignPrompts.filter(prompt => 
    prompt.toLowerCase().includes(query.toLowerCase()) ||
    query.toLowerCase().split(' ').some(word => prompt.toLowerCase().includes(word))
  );

  // If no relevant prompts, generate some based on the query
  if (relevantPrompts.length === 0) {
    relevantPrompts.push(`${query} design`, `modern ${query}`, `creative ${query} layout`);
  }

  return relevantPrompts.slice(0, 6).map((prompt, index) => ({
    id: `result-${Date.now()}-${index}`,
    title: prompt.charAt(0).toUpperCase() + prompt.slice(1),
    description: `Inspiring ${prompt} examples and templates for your next project`,
    url: `https://example.com/designs/${prompt.replace(/\s+/g, '-')}`,
    tags: prompt.split(' ').concat(['UI', 'Design', 'Inspiration']),
    type: 'design' as const
  }));
};

export const searchModel = {
  async search(query: string): Promise<SearchResult[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`Model: Processing search for "${query}"`);
    
    // In a real app, this would call an external API like:
    // const response = await fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`);
    // return response.json();
    
    return generateMockResults(query);
  },

  getPredefinedPrompts(): string[] {
    return mockDesignPrompts;
  }
};
