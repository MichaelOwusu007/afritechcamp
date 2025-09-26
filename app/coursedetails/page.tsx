"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Play, Star, BookOpen, Users, Clock } from "lucide-react";
import Image from "next/image"; // ✅ import Next.js Image

// Mock course data
const courses = [
  {
    id: "1",
    title: "Modern Web Development",
    description:
      "Learn the fundamentals of web development with React, Next.js, and Tailwind CSS.",
    thumbnail:
      "https://images.unsplash.com/photo-1581090700227-4c4f50b16403?auto=format&fit=crop&q=80&w=800",
    instructor: "Jane Doe",
    duration: "12 weeks",
    students: 120,
    lessons: 24,
    rating: 4.8,
    reviews: [
      {
        id: 1,
        user: "Alice",
        comment: "Great course! Highly recommended.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: 2,
        user: "Bob",
        comment: "Very informative and well-structured.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
      },
    ],
  },
];

export default function CourseDetailsPage() {
  const params = useParams();
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return <div className="p-6">Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-muted-foreground">{course.description}</p>
      </div>

      {/* Video Preview */}
      <div className="relative rounded-xl overflow-hidden bg-black aspect-video mb-8">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={800}
          height={450}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Button size="lg" className="gradient-sunset text-primary-foreground">
            <Play className="mr-2 h-6 w-6" />
            Preview Course
          </Button>
        </div>
      </div>

      {/* Course Info */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    {course.description} This course will guide you through the
                    process of building modern web applications using the latest
                    technologies and best practices.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Badge variant="secondary">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </Badge>
                    <Badge variant="secondary">
                      <Users className="mr-1 h-4 w-4" />
                      {course.students} students
                    </Badge>
                    <Badge variant="secondary">
                      <BookOpen className="mr-1 h-4 w-4" />
                      {course.lessons} lessons
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {Array.from({ length: course.lessons }).map((_, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent cursor-pointer"
                      >
                        <Play className="h-4 w-4" />
                        Lesson {i + 1}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Student Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.reviews.map((review) => (
                      <div key={review.id} className="flex gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.user} />
                          <AvatarFallback>
                            {review.user[0].toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">
                              {review.user}
                            </span>
                            <div className="flex">
                              {Array.from({ length: review.rating }).map(
                                (_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-primary text-primary"
                                  />
                                )
                              )}
                            </div>
                          </div>
                          <p>{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={33} className="mb-4" />
              <Button className="w-full">Continue Learning</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
