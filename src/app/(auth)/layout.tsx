import { Image } from "lucide-react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              <Image
                src="/icon/auth-image.svg"
                alt="Auth image"
                width={500}
                height={500}
              />
            </div>

          </div>
      </main>
    );
  }
  