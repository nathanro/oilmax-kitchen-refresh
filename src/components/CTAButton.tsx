
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CTAButtonProps = {
  text: string;
  link: string;
  className?: string;
  variant?: 'default' | 'sample' | 'quote';
};

const CTAButton = ({ text, link, className = "", variant = 'default' }: CTAButtonProps) => {
  const getButtonClass = () => {
    if (variant === 'sample') {
      return "bg-cta hover:bg-cta-hover text-white";
    }
    if (variant === 'quote') {
      return "bg-primary hover:bg-oilmax-dark text-white";
    }
    return "bg-primary hover:bg-oilmax-dark text-white";
  };

  return (
    <Button asChild className={`${getButtonClass()} ${className} font-semibold px-6 py-5 h-auto`}>
      <Link to={link}>{text}</Link>
    </Button>
  );
};

export default CTAButton;
