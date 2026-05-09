export default function Button({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`border-ice/20 block w-full rounded-full px-8 py-4 ${className}`}
    >
      {children}
    </a>
  );
}
