import SideBar from "@/components/SideBar";
import MobileNav from "@/components/ui/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { Sidebar } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useRouter } from "next/router";

export default async function RootLayout({
    children,
}: Readonly<{
    children:React.ReactNode;
}>) {
    const router = useRouter();
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) {
        router.push('/sign-in');
        return null;
    }

    return (
      <main className="flex h-screen w-full front-inter">
        <Sidebar user ={loggedIn} />
        <div className="flex size-full flex-col">
            <div className="root-layout">
                <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
                <div>
                    <MobileNav user={loggedIn} />
                </div>
            </div>
            {children}
        </div>
      </main>
    );
}