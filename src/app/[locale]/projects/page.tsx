"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, Filter, X } from "lucide-react";
import { useProjectCategories } from "./data";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import HeroHeader from "../components/HeroHeader";
import LinkWithLoading from "../components/LinkWithLoading";
import { useTranslation } from "react-i18next";
import SuspenseWrapper from "../components/SuspenseWrapper";

// Separate component for the filtered content
function FilteredProjects() {
  const projectCategories = useProjectCategories();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useTranslation();
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const allProjects = projectCategories.flatMap((category) =>
    category.projects.map((project) => ({
      ...project,
      category: category.id,
      categoryTitle: category.title,
    }))
  );

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [activeFilters, setActiveFilters] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || []
  );

  // Filter projects based on search and filters
  const filterProjects = useCallback((search: string, filters: string[]) => {
    let result = allProjects;

    if (search) {
      const query = search.toLowerCase();
      result = result.filter((project) =>
        project.title.toLowerCase().includes(query)
      );
    }

    if (filters.length > 0) {
      result = result.filter((project) =>
        filters.includes(project.category)
      );
    }

    setFilteredProjects(result);
  }, [allProjects]);

  // Update URL with current filters
  const updateURL = useCallback((search: string, filters: string[]) => {
    const params = new URLSearchParams();
    
    if (search) {
      params.set("search", search);
    }
    
    if (filters.length > 0) {
      params.set("categories", filters.join(","));
    }

    const queryString = params.toString();
    router.replace(queryString ? `?${queryString}` : "", { scroll: false });
  }, [router]);

  // Handle search input changes with debounce
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    
    // Update URL and filter after a short delay
    setTimeout(() => {
      updateURL(value, activeFilters);
      filterProjects(value, activeFilters);
    }, 300);
  };

  // Handle category filter toggles
  const toggleCategoryFilter = (categoryId: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(categoryId)
        ? prevFilters.filter((id) => id !== categoryId)
        : [...prevFilters, categoryId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilters([]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handler = setTimeout(() => {
      updateURL(searchQuery, activeFilters);
      filterProjects(searchQuery, activeFilters);
    }, 300);
  
    return () => clearTimeout(handler);
  }, [searchQuery, activeFilters]); // Run only when these change

  // Sync with URL parameters on initial load and URL changes
  useEffect(() => {
    if (!hasLoadedOnce) {
      const search = searchParams.get("search") || "";
      const categories = searchParams.get("categories")?.split(",").filter(Boolean) || [];
  
      setSearchQuery(search);
      setActiveFilters(categories);
      filterProjects(search, categories);
  
      setHasLoadedOnce(true);
    }
  }, [searchParams, filterProjects, hasLoadedOnce]);

  return (
    <>
      <section className="bg-black/90 sticky top-0 z-30 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={t("projectsPage.searchPlaceholder")}
                value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {projectCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant={
                    activeFilters.includes(category.id) ? "default" : "outline"
                  }
                  className={`cursor-pointer text-sm py-1.5 ${
                    activeFilters.includes(category.id)
                      ? "bg-[#eccc68] hover:bg-[#eccc68]/80 text-black"
                      : "bg-white/5 hover:bg-white/10 text-white"
                  }`}
                  onClick={() => toggleCategoryFilter(category.id)}
                >
                  {category.title}
                </Badge>
              ))}

              {(activeFilters.length > 0 || searchQuery) && (
                <Badge
                  variant="outline"
                  className="cursor-pointer bg-white/5 hover:bg-white/10 text-white"
                  onClick={clearFilters}
                >
                  Clear All
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">No projects found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={clearFilters}
              className="bg-[#eccc68] text-black hover:bg-[#FFC100]/80"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {filteredProjects.length} {t("projectsPage.projectsFound")}
              </h2>
              <div className="text-sm text-gray-400">
                {activeFilters.length > 0 && (
                  <span className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filtered by {activeFilters.length}{" "}
                    {activeFilters.length === 1 ? "category" : "categories"}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border border-white/15 bg-black/20 transition-all hover:border-white/30 hover:shadow-lg hover:shadow-[#FFC100]/5 h-[450px] flex flex-col"
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-[#eccc68] text-black">
                      {project.categoryTitle}
                    </Badge>
                  </div>

                  <div className="flex flex-col justify-between flex-1 p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <LinkWithLoading
                      href={project.url}
                      className="mt-auto inline-block w-full rounded-xl bg-[#eccc68] py-2.5 text-center text-sm font-semibold text-black transition-all hover:bg-white"
                    >
                      {t("projectsPage.viewProject")}
                    </LinkWithLoading>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <SuspenseWrapper>
      <main>
        <HeroHeader
          backgroundImage="/images/YellowBG.png"
          heading={{
            main: t("projectsPage.title"),
          }}
          subheading={t("projectsPage.subtitle")}
          laptopImage="/labels/Final_Laptop.png"
        />
        <FilteredProjects />
      </main>
    </SuspenseWrapper>
  );
}