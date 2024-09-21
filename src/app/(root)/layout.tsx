import SideBar from "@/components/SideBar";
import MobileNav from "@/components/ui/MobileNav";
import { Sidebar } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children:React.ReactNode;
}>) {
    const loggedIn = { firstName : "Pavan Kumar", lastName : "Kotrakona" email: "kotrakonapavankumar572@.com"};
 

    return (
      <main className="flex h-screen w-full front-inter">
        <Sidebar user={loggedIn} />
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