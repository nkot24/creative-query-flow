
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  type: 'design' | 'template' | 'inspiration';
}

export interface SearchFilters {
  category?: string;
  tags?: string[];
  type?: SearchResult['type'];
}
