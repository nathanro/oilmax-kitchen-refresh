
type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
};

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className = ""
}: SectionHeadingProps) => {
  const getAlignment = () => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'right': return 'text-right';
      default: return 'text-center';
    }
  };

  return (
    <div className={`${getAlignment()} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
