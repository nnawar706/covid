import MeetingCategoryList from "@/components/MeetingCategoryList";


const Home = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

    return (
        <section className="flex w-full h-full flex-column gap-4 text-color">
            <div className="h-24rem w-full border-round bg-cover"
                style={{ backgroundImage: "url('/images/hero-background.png')" }}
            >
                <div className="flex flex-column h-full justify-content-between 
                md:px-5 md:py-8">
                    <h2 className="text-center font-normal w-18rem border-round text-base 
                    surface-400 py-2 text-200">
                        Upcoming meeting at 12:30 PM
                    </h2>
                    <div className="flex flex-column gap-1">
                        <h1 className="text-4xl font-bold m-0 text-200">{time}</h1>
                        <p className="text-lg font-medium m-0 text-blue-100">{date}</p>
                    </div>
                </div>
            </div>
            <MeetingCategoryList/>
        </section>
    );
}

export default Home;