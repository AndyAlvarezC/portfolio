interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  const baseStyles = 'w-full min-h-screen flex items-center justify-center text-center';

  return (
    <section id={id} className={`${baseStyles} ${className}`}>
      {children}
    </section>
  );
}
