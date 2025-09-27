"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, Filter } from "lucide-react";
import { categories } from "@/data/mockData";
import type { Filters } from "@/app/types/course"; // ✅ shared type

interface CourseFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export function CourseFilters({ filters, onFiltersChange }: CourseFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const levels: Filters["level"] = ["Beginner", "Intermediate", "Advanced"];
  const languages = ["English", "French", "Swahili", "Hausa", "Arabic", "Amharic"];
  const durations = ["0-2 hours", "2-6 hours", "6-17 hours", "17+ hours"];

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const toggleArrayFilter = (key: keyof Filters, value: string) => {
    const currentArray = filters[key] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray as Filters[typeof key]);
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      level: [],
      price: [0, 200],
      rating: 0,
      language: [],
      duration: [],
    });
  };

  return (
    <div className="w-full lg:w-80 space-y-6">
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </div>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="lg:block">
        <CollapsibleContent className="space-y-6 mt-6 lg:mt-0">
          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-medium">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.categories.includes(category.name)}
                    onCheckedChange={() => toggleArrayFilter("categories", category.name)}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Level */}
          <div className="space-y-3">
            <h3 className="font-medium">Level</h3>
            <div className="space-y-2">
              {levels.map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.level.includes(level)}
                    onCheckedChange={() => toggleArrayFilter("level", level)}
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="space-y-3">
            <h3 className="font-medium">Price Range</h3>
            <Slider
              value={filters.price}
              onValueChange={(value) =>
                updateFilter("price", value as [number, number])
              }
              min={0}
              max={200}
              step={10}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${filters.price[0]}</span>
              <span>${filters.price[1]}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <h3 className="font-medium">Minimum Rating</h3>
            <Select
              value={filters.rating.toString()}
              onValueChange={(val) => updateFilter("rating", parseInt(val))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5].map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Language */}
          <div className="space-y-3">
            <h3 className="font-medium">Language</h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.language.includes(lang)}
                    onCheckedChange={() => toggleArrayFilter("language", lang)}
                  />
                  <span>{lang}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-3">
            <h3 className="font-medium">Duration</h3>
            <div className="space-y-2">
              {durations.map((dur) => (
                <label key={dur} className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.duration.includes(dur)}
                    onCheckedChange={() => toggleArrayFilter("duration", dur)}
                  />
                  <span>{dur}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear */}
          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Clear Filters
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
