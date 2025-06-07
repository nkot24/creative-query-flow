
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/SearchResults";
import { useSearchController } from "@/hooks/useSearchController";

const Index = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    isLoading, 
    handleSearch 
  } = useSearchController();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">UI Design Inspiration</h1>
          <p className="text-xl text-muted-foreground">
            Search for design prompts and discover amazing UI examples
          </p>
        </div>
        
        <SearchBar 
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onSearch={handleSearch}
          isLoading={isLoading}
        />
        
        <SearchResults 
          results={searchResults}
          isLoading={isLoading}
          query={searchQuery}
        />
      </div>
    </div>
  );
};

export default Index;
