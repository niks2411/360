import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Priya Sharma",
    username: "E-commerce Director",
    body: "Our online sales increased by 300% after implementing their SEO strategies. The team's expertise in digital marketing is exceptional.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Rajesh Kumar",
    username: "Tech Startup CEO",
    body: "The analytics dashboard helped us understand our customer behavior better. Our conversion rates improved significantly.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Anita Patel",
    username: "Healthcare Marketing",
    body: "Their marketing automation tools saved us hours of work. Patient engagement has never been this high.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Vikram Singh",
    username: "Real Estate Agency",
    body: "Our property listings now rank on the first page of Google. The ROI on their services has been outstanding.",
    img: "ba.jpg",
  },
  {
    name: "Sneha Reddy",
    username: "Fashion Retailer",
    body: "The social media campaigns they created boosted our brand awareness by 400%. Highly recommend their services.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Arjun Mehta",
    username: "Restaurant Chain Owner",
    body: "Our online orders increased by 250% after their digital marketing campaign. The team is professional and results-driven.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background"></div>
    </div>
  );
}
