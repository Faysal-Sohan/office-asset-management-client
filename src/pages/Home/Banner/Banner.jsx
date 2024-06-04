import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/Home/Banner1.png'
import img2 from '../../../assets/Home/Banner2.png'
const Banner = () => {
    return (
        <Carousel showThumbs={false} showStatus={false} dynamicHeight={false}>
            <div className="relative h-[90vh] w-full">
                <img
                    src={img1}
                    alt="image 1"
                    className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 grid h-full place-items-center w-full bg-black/55 rounded-lg">
                    <div className="w-3/4 text-center md:w-2/4 text-white">
                        <div
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl "
                        >
                            Enhance Your Workday
                        </div>
                        <div
                            className="mb-12"
                        >
                            Get easy access to the tools you need. Request laptops, phones, office supplies, and more - all in one place.
                        </div>
                        <div className="flex justify-center gap-2">
                            <button className="btn btn-primary">
                                Join as Employee
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[90vh] w-full">
                <img
                    src={img2}
                    alt="image 2"
                    className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75 rounded-lg">
                    <div className="w-3/4 pl-8 md:w-2/4 md:pr-20 lg:pr-24 text-white absolute right-10">
                        <div
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Empower Your Team
                        </div>
                        <div
                            className="mb-12"
                        >
                            Simplify asset allocation and tracking for your employees. Approve requests, monitor usage, and optimize resource management.
                        </div>
                        <div>
                            <button className="btn btn-secondary">
                                Join as HR/Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;