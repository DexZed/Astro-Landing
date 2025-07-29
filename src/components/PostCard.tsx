import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { GoLinkExternal } from "react-icons/go"
import { useRef, useState, useEffect } from "react"

interface PostCardProps {
  title: string
  description: string
  date?: string
  tags: string[]
  url?: string
}

const PostCard = ({ title, description, date, tags, url }: PostCardProps) => {
  const projectRef = useRef(null)
    const [threshold, setThreshold] = useState(0.5)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up")
              entry.target.classList.remove("opacity-0")
              entry.target.classList.remove("animate-fade-out-down")
              setThreshold(0.3)
            } else {
              entry.target.classList.remove("animate-fade-in-up")
              entry.target.classList.add("animate-fade-out-down")
              entry.target.classList.add("opacity-0")
  
              setThreshold(0.5)
            }
          })
        },
        {
          threshold: threshold,
          rootMargin: "0px",
        }
      )
  
      if (projectRef.current) {
        observer.observe(projectRef.current)
      }
  
      return () => {
        if (projectRef.current) {
          observer.unobserve(projectRef.current)
        }
      }
    }, [threshold])
  
  return (
    <Card className="w-full" ref={projectRef}>
      <CardHeader>
        <CardTitle>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 dark:text-slate-400"
          >
            {title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="text-slate-700 dark:text-slate-400"
            >
              {date}
            </Badge>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-slate-700 dark:text-slate-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
        </div>
      </CardFooter>
    </Card>
  )
}
export default PostCard
