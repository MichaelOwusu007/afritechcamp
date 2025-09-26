"use client"


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ChevronDown, Filter, X } from 'lucide-react';
import { categories } from '@/data/mockData';

interface CourseFiltersProps {
  filters: {
    categories: string[];
    level: string[];
    price: [number, number];
    rating: number;
    language: string[];
    duration: string[];
  };
  onFiltersChange: (filters: any) => void;
}

export function CourseFilters({ filters, onFiltersChange }: CourseFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const languages = ['English', 'French', 'Swahili', 'Hausa', 'Arabic', 'Amharic'];
  const durations = ['0-2 hours', '2-6 hours', '6-17 hours', '17+ hours'];

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const toggleArrayFilter = (key: string, value: string) => {
    const currentArray = filters[key as keyof typeof filters] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray);
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

  const hasActiveFilters = 
    filters.categories.length > 0 ||
    filters.level.length > 0 ||
    filters.language.length > 0 ||
    filters.duration.length > 0 ||
    filters.rating > 0 ||
    filters.price[0] > 0 ||
    filters.price[1] < 200;

  return (
    <div className="w-full lg:w-80 space-y-6">
      {/* Mobile Filter Toggle */}
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
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="lg:block">
        <CollapsibleContent className="space-y-6">
          {/* Filter Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Filters</h3>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>

          {/* Sort By */}
          <div className="space-y-3">
            <h4 className="font-medium">Sort by</h4>
            <Select defaultValue="popular">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-medium">Categories</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.name}
                    checked={filters.categories.includes(category.name)}
                    onCheckedChange={() => toggleArrayFilter('categories', category.name)}
                  />
                  <label
                    htmlFor={category.name}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {category.name} ({category.courseCount})
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Level */}
          <div className="space-y-3">
            <h4 className="font-medium">Level</h4>
            <div className="space-y-2">
              {levels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox
                    id={level}
                    checked={filters.level.includes(level)}
                    onCheckedChange={() => toggleArrayFilter('level', level)}
                  />
                  <label
                    htmlFor={level}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <h4 className="font-medium">Price Range</h4>
            <div className="px-2">
              <Slider
                value={filters.price}
                onValueChange={(value) => updateFilter('price', value)}
                max={200}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>${filters.price[0]}</span>
                <span>${filters.price[1]}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <h4 className="font-medium">Rating</h4>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={filters.rating === rating}
                    onCheckedChange={() => updateFilter('rating', rating === filters.rating ? 0 : rating)}
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {rating}+ stars
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="space-y-3">
            <h4 className="font-medium">Language</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {languages.map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox
                    id={language}
                    checked={filters.language.includes(language)}
                    onCheckedChange={() => toggleArrayFilter('language', language)}
                  />
                  <label
                    htmlFor={language}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {language}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-3">
            <h4 className="font-medium">Duration</h4>
            <div className="space-y-2">
              {durations.map((duration) => (
                <div key={duration} className="flex items-center space-x-2">
                  <Checkbox
                    id={duration}
                    checked={filters.duration.includes(duration)}
                    onCheckedChange={() => toggleArrayFilter('duration', duration)}
                  />
                  <label
                    htmlFor={duration}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {duration}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="space-y-3 border-t pt-4">
              <h4 className="font-medium">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {filters.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => toggleArrayFilter('categories', category)}
                    />
                  </Badge>
                ))}
                {filters.level.map((level) => (
                  <Badge key={level} variant="secondary" className="text-xs">
                    {level}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => toggleArrayFilter('level', level)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}