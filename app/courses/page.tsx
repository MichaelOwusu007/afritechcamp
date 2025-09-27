"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course/CourseCard";
import { CourseFilters } from "@/components/course/CourseFilters";
import { Search, Grid, List } from "lucide-react";
import { mockCourses } from "@/data/mockData";
import { Layout } from "@/components/layout/Layout";
import type { Filters, CourseLevel } from "@/app/types/course"; // ✅ import shared type

export default function Courses() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [filters, setFilters] = useState<Filters>({
    categories: searchParams?.get("category")
      ? [searchParams.get("category") as string]
      : [],
    level: [] as CourseLevel[],
    price: [0, 200],
    rating: 0,
    language: [],
    duration: [],
  });

  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      if (
        searchQuery &&
        !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(course.category)
      ) {
        return false;
      }

      if (
        filters.level.length > 0 &&
        !filters.level.includes(course.level as CourseLevel)
      ) {
        return false;
      }

      if (course.price < filters.price[0] || course.price > filters.price[1]) {
        return false;
      }

      if (filters.rating > 0 && course.rating < filters.rating) {
        return false;
      }

      if (
        filters.language.length > 0 &&
        !filters.language.some((lang) =>
          course.language.toLowerCase().includes(lang.toLowerCase())
        )
      ) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6 mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold">
            Explore Courses
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover {mockCourses.length}+ courses designed for African learners
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search courses, instructors, topics..."
                className="pl-10 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Now matches type definition */}
          <CourseFilters filters={filters} onFiltersChange={setFilters} />

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredCourses.length} of {mockCourses.length} courses
                {searchQuery && (
                  <span>
                    {" "}
                    for &quot;{searchQuery}&quot;
                  </span>
                )}
              </p>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold">No courses found</h3>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setFilters({
                      categories: [],
                      level: [],
                      price: [0, 200],
                      rating: 0,
                      language: [],
                      duration: [],
                    });
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    variant={viewMode === "list" ? "featured" : "default"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
