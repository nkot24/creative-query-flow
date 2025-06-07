
import { useState } from "react";
import { SearchResult } from "@/types/search";
import { searchModel } from "@/models/searchModel";
import { useToast } from "@/hooks/use-toast";

export const useSearchController = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      console.log(`Searching for: ${searchQuery}`);
      
      // Use the search model to get results
      const results = await searchModel.search(searchQuery);
      setSearchResults(results);
      
      toast({
        title: "Search completed",
        description: `Found ${results.length} design inspirations`,
      });
    } catch (error) {
      console.error("Search failed:", error);
      toast({
        title: "Search failed",
        description: "Unable to fetch search results. Please try again.",
        variant: "destructive",
      });
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    handleSearch,
  };
};
