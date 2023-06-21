import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:mx-[5vw] md:my-[5vw]'>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 my-7 gap-x-4 items-center">
                        <div>
                            <div>
                                <img src="/images/nchprofile03.jpg" alt="HealthPath" className="w-full md:w-2/3 h-auto" />
                            </div>
                        </div>
                        <div className="text-white text-l md:text-xl w-full">
                            <p className="text-white font-bold text-xl md:text-2xl my-4">About Me</p>
                            <p>I'm currently pursuing my Master's degree at Academy of Art University (San Francisco, CA), majoring in Interaction & UX/UI Design.
                                I recently graduated from Mahidol University International College (Bangkok, Thailand) majoring in Communication Design.</p>
                            <p className='py-4'>
                                As a designer, I am passionate about creating designs that are not only aesthetically pleasing but also serve a purpose.
                                I believe that good design has the power to solve real-world problems and improve people's lives. I strive to create intuitive
                                and engaging experiences that make people's lives simpler as well as more enjoyable with each project.
                            </p>
                            <p className='py-2'>
                                Let's get in touch !
                            </p>
                            <p>
                                nutchamim@gmail.com
                            </p>
                            {/* <p className='py-2'>
                                @nchmim
                            </p> */}
                            <div className='py-7'>
                                <button className="bg-black border-2 border-white hover:scale-105 text-white font-medium py-4 px-4 rounded" 
                                onClick={() => window.open('https://drive.google.com/file/d/16nrk0NzN8iLWPxpy7NRDKn2-agivonMm/view?usp=sharing', '_blank')}>
                                    Resume
                                </button></div>
                        </div>
                    </div>

              






                </div>
            </div>
        </Layout>
    );
}