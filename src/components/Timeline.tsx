import { useRef, useState, useEffect } from "react"

interface TimelineProps {
  date: string
  title: string
  institute?: string,
  subjects?:string,
  results?:string,
  awards?:string
}

const Timeline = ({ content }: {content: TimelineProps[]}) => {
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
    <section className="flex flex-col w-full max-w-[800px]" >
      <div className="relative border-l-2 border-slate-700 ml-6">
        {content.map((item) => (
          <div key={item.title.replaceAll(" ", "")} className="relative mb-10 ml-6 " ref={projectRef}>
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[31px]  top-1.6"></div>
            <p className="text-sm text-gray-500">{item.date}</p>
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-semibold">{item.title}</h3>
            <div className="flex flex-col">
              <div>{
              item.institute ??<p className="text-gray-600 mt-2">{item.institute}</p>
            }</div>
            <div>{
              item.subjects ?? <p className="text-gray-600 mt-2">{item.subjects}</p>
            }</div>
            <div>{
              item.results ?? <p className="text-gray-600 mt-2">{item.results}</p>
            }</div>
            <div>{
              item.awards ?? <p className="text-gray-600 mt-2">{item.awards}</p>
            }</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
