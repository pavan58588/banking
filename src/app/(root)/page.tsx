import { Icon } from "lucide-react";
import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: 'Pavan Kumar', lastName: "kotrakona", email: " kotrakoonapavankumar572@gmail.com" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1} // Pass a number value here
            totalCurrentBalance={1250.25}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50}, { currentBalance : 1500.45 }]}
      />
    </section>
  )
}

export default Home;