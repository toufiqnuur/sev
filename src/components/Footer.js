import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-300">
      <Container className="pt-6">
        <h3 className="text-lg font-semibold">Links</h3>
        <ul className="mt-3 grid max-w-[500px] grid-cols-2">
          <li>Home</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>About</li>
          <li>Terms of Service</li>
          <li>Report</li>
        </ul>
        <div className="mt-6 flex justify-between border-t border-zinc-400/50 py-2">
          <p>sev.my.id &copy; {new Date().getFullYear()}</p>
          <p>Made with &lt;3 and a cup of coffee</p>
        </div>
      </Container>
    </footer>
  );
}
