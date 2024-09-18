import HeaderBox from '@/components/headerbox'

const Home = ()  => {
   const loggedIn = {firstName: " Pavan" };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                   <HeaderBox
                     type="greeting"
                     title="Welcome"
                     user={loggedIn?.firstName || 'Guest'}
                     subtext="Access and Manage your account and transactions efficiently."
                    />
                </header>
            </div>
        </section>

    )
}

export default Home