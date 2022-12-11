export default function Container({ children, className, ...attrs }) {
  return (
    <div className={`mx-auto max-w-screen-lg px-4 ${className}`} {...attrs}>
      {children}
    </div>
  );
}
