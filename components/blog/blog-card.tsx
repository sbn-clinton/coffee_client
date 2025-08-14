"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
// import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    publishedAt: string;
    slug: string;
    tags: string[];
  };
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const { image, title, excerpt, author, publishedAt, slug, tags } = post;

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="p-6 flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {post?.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="font-semibold text-xl mb-3 line-clamp-2">
            <p className="hover:text-primary transition-colors">{title}</p>
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(publishedAt)}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
