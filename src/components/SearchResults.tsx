
import { SearchResult } from "@/types/search";

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  query: string;
}

export const SearchResults = ({ results, isLoading, query }: SearchResultsProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-card rounded-lg p-4 border animate-pulse">
            <div className="bg-muted h-48 rounded mb-4"></div>
            <div className="bg-muted h-4 rounded mb-2"></div>
            <div className="bg-muted h-3 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!query) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          Enter a design prompt to start searching for inspiration
        </p>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No results found for "{query}". Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Search Results for "{query}" ({results.length} found)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <div key={result.id} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="font-medium text-lg mb-2">{result.title}</h3>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {result.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
