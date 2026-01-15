import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { CONTENT } from "@/lib/content";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard = ({
  name,
  avatar,
  rating,
  text,
  service,
}: TestimonialCardProps) => {
  return (
    <Card className="h-full border-none shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary font-inter text-xl text-white">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-right">
            <h4 className="font-inter mb-1 text-lg font-bold text-gray-900">
              {name}
            </h4>
            <div className="flex items-center justify-end gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="font-inter mb-4 leading-relaxed text-gray-700">
          "{text}"
        </p>
        <div className="flex items-center justify-between border-t pt-4">
          <Badge
            variant="secondary"
            className="bg-primary/10 font-inter text-primary"
          >
            {service}
          </Badge>
          <span className="font-inter text-xs text-gray-500">
            {CONTENT.testimonials.verified}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
