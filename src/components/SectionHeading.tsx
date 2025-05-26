
type SectionHeadingProps = {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
};

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
