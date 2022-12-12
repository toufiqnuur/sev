export default function Container({ children, className, ...attrs }) {
  return (
    <div
      className={`mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg ${className}`}
      {...attrs}
    >
      {children}
    </div>
  );
}
