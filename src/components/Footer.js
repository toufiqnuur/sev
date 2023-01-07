import Link from "next/link";
import Container from "./Container";

export const LinksHeader = ({ children }) => (
  <h5 className="text-lg font-semibold md:text-xl">{children}</h5>
);

export const LinkGroup = ({ children }) => (
  <ul className="mt-4 space-y-2">{children}</ul>
);

export const LinkItem = ({ href, children }) => (
  <li>
    <Link href={href}>{children}</Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-200">
      <Container className="grid grid-cols-2 gap-8 py-16 md:grid-cols-3">
        <div>
          <LinksHeader>Legal</LinksHeader>
          <LinkGroup>
            <LinkItem href="#">Privacy Policy</LinkItem>
            <LinkItem href="#">Terms of Service</LinkItem>
            <LinkItem href="#">Code of Conduct</LinkItem>
          </LinkGroup>
        </div>
        <div>
          <LinksHeader>Resource</LinksHeader>
          <LinkGroup>
            <LinkItem href="#">Source Code</LinkItem>
            <LinkItem href="#">Report Error</LinkItem>
          </LinkGroup>
        </div>
        <div className="flex flex-col">
          <Link href="/" className="-mt-2 text-5xl font-semibold">
            s<span className="rounded-xl border-b-4 border-blue-600">v.</span>
          </Link>
          <span className="mt-6 max-w-xs">
            &copy; {new Date().getFullYear()} Sev | Handmade in New Yorkarto,
            Indonesia by an indie web developer.
          </span>
        </div>
      </Container>
    </footer>
  );
}
