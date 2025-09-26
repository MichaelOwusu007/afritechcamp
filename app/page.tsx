"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/course/CourseCard";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Play,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Heart,
} from "lucide-react";
import { mockCourses, categories } from "@/data/mockData";
import heroImage from "@/public/app-screenshot.jpg";
import { CountingNumber } from "@/components/ui/countingNumber";
import { AuthModals } from "@/components/auth/AuthModals";
import { Footer } from "@/components/layout/Footer";

const stats = [
  { icon: Users, label: "Active Learners", value: "100+" },
  { icon: BookOpen, label: "Courses Available", value: "50+" },
  { icon: GraduationCap, label: "Expert Instructors", value: "50+" },
  { icon: Award, label: "Certificates Issued", value: "100+" },
];

const testimonials = [
  {
    name: "Adaora Okonkwo",
    role: "Software Developer",
    location: "Lagos, Nigeria",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content:
      "Afritechcamp helped me transition from marketing to software development. The instructors understand the African context perfectly.",
    rating: 5,
  },
  {
    name: "Kofi Asante",
    role: "Entrepreneur",
    location: "Accra, Ghana",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "The business courses are tailored for African markets. I learned strategies that actually work here, not just in Silicon Valley.",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "Agricultural Engineer",
    location: "Cairo, Egypt",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    content:
      "Finally, agricultural courses that address our climate and soil conditions. The practical knowledge is invaluable.",
    rating: 5,
  },
];

export default function Landing() {
  const popularCourses = mockCourses.filter((c) => c.isPopular).slice(0, 3);
  const [authOpen, setAuthOpen] = useState(false);
  const [userType, setUserType] = useState<"student" | "instructor" | null>(
    null
  );

  const handleAuthSuccess = (type: "student" | "instructor") => {
    setUserType(type);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-black text-white px-3 py-1 rounded-md shadow-md">
                🌍 MADE FOR AFRICA
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering{" "}
                <span className="bg-gradient-to-r from-red-500 to-yellow-600  bg-clip-text text-transparent">
                  African Minds
                </span>{" "}
                Through Education
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Join thousands of learners across Africa. Learn from local
                experts and global professionals. Courses designed for African
                contexts, challenges, and opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className=" cursor-pointer bg-black text-white shadow-lg shadow-orange-300/50 hover:shadow-xl"
                  onClick={() => setAuthOpen(true)}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-black border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Rated 4.8/5 by 50+ students
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg shadow-orange-200/60">
                <img
                  src={heroImage.src}
                  alt="African students learning"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <Card className="absolute -bottom-6 left-6 shadow-lg">
                <CardContent className=" flex items-center gap-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-600 p-2 rounded-xl">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">80% Success Rate</div>
                    <div className="text-sm text-gray-500">
                      Course completion
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute  -top-6 right-6 shadow-lg">
                <CardContent className=" flex items-center gap-3">
                  <div className="bg-black p-2 rounded-xl">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">5 Countries</div>
                    <div className="text-sm text-gray-500">Across Africa</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="bg-black p-3 rounded-2xl w-fit mx-auto shadow-md">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CountingNumber
                    end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                    suffix={stat.value.replace(/[0-9]/g, "").replace(",", "")}
                    className="text-3xl font-bold"
                  />
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Explore by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover courses tailored for African contexts and global
              standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/courses?category=${encodeURIComponent(category.name)}`}
              >
                <Card className="group hover:shadow-lg hover:shadow-orange-200/70 transition-all">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold group-hover:text-orange-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.courseCount} courses
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Popular Courses</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of students in our most loved courses
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {popularCourses.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                variant={i === 0 ? "featured" : "default"}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Success Stories from Africa
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from learners who transformed their careers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-gray-500">
                        {t.role} • {t.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Join over 100+ African learners who are building skills,
              advancing careers, and creating opportunities. Start your learning
              journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="/courses">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Learning Today
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white cursor-pointer text-white bg-black hover:bg-white"
              >
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <AuthModals
        open={authOpen}
        onOpenChange={setAuthOpen}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}
