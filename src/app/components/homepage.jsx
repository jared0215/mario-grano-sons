import Navbar from "./navbar"
import Button from "./reusable/buttons"


const Homepage = () => {
    return (
    <div className="bg-main-bg h-screen pt-5">

        <Navbar />

        <section className="text-white body-font">

            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    Mario Grano & Sons, 
                    is a 2nd generation family business providing
                    quality masonry work since 1963.
                </h1>
                <div className="flex justify-center">
                    <Button text="Our History" link="/about" />
                    <Button text="Contact" link="/contact" />
                </div>
            </div>

        </section>

    </div>
    )
}

export default Homepage