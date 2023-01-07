import Container from "../../components/Container";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { supabase } from "../../utils/supabase";

export default function SignIn() {
  const handleAuthWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data, error);
  };

  return (
    <div>
      <Container className="flex justify-center md:h-screen lg:items-center">
        <form className="mt-16 flex w-full max-w-md flex-col lg:mt-0">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <button
            type="button"
            onClick={handleAuthWithGoogle}
            className="mt-8 flex items-center justify-center space-x-3 rounded-lg border border-zinc-400 bg-white px-4 py-2 font-bold hover:bg-zinc-200 focus:ring-2 focus:ring-zinc-300"
          >
            <FcGoogle /> <span>Masuk dengan google</span>
          </button>
          <div className="mt-4">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input w-full rounded-lg"
            />
          </div>
          <div className="mt-4">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input w-full rounded-lg"
            />
            <p className="mt-3">
              <Link
                href="/auth/forget-password"
                className="mt-4 font-bold text-blue-600 hover:underline"
              >
                Lupa password?
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="mt-8 rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
          >
            Masuk
          </button>
          <p className="mt-3">
            Sudah punya akun?{" "}
            <Link
              href="/auth/forget-password"
              className="mt-4 font-bold text-blue-600 hover:underline"
            >
              Masuk
            </Link>
          </p>
        </form>
      </Container>
    </div>
  );
}
