import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
                    <div className='md:w-2/5'>
                        <p className="font-bold text-white text-xl md:text-2xl">
                            AUDI x ZENITH
                        </p>
                        <p className="text-white text-l md:text-xl">UX / UI</p>
                        <p className="text-white my-7 text-l md:text-xl">
                        A project sponsored by Audi, this initiative focuses on envisioning an 
                        off-road transportation for 2035. Our aim is to accentuate the fundamental values with a touch of luxury, seamlessly integrating user experience through an intuitive interface.
                        </p>
                    </div>
                    <img className="md:w-3/5" src="/images/zenith_cover.png" alt="Zenith" />
                </div>
                <div className="flex-grow border-t-2 border-gray-400" />

                <div className='md:mx-[5vw]'>

                    <div className='md:inline-flex md:space-x-10 mt-10 items-center w-full'>

                        <div className="text-white my-7 text-l md:text-xl md:w-2/5">
                            <p className="font-bold text-l md:text-xl mt-4">Role</p>
                            <p>UX/UI Designer</p>
                            <p className="font-bold text-l md:text-xl mt-4">Team</p>
                            <p>6 people</p>
                            <p className="font-bold text-l md:text-xl mt-4">Duration</p>
                            <p>3 Months</p>
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>Per Aspera Ad Astra. </p>
                            <p>Latin  phrase, meaning 'through adversity to the stars'</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Objective</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>To create <span className='font-bold'>Zenith</span>, an Audi sub-brand, providing 
                            <span className='font-bold'> vehicle charter service</span> for users to experience an exclusive
                            stargazing adventure in Alaska as well as other national parks throughout the United States.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Meet the team</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_members.png" alt="Zenith" />
                    </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Research</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_trends.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_national parks.png" alt="Zenith" />
                    </div>
     
                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_why.png" alt="Zenith" />
                    </div>
        
                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>Overall, the combination of <span className='font-bold'>advanced technology, convenience, comfort,</span>
                        and the <span className='font-bold'>unique opportunity</span> to connect with the night 
                        sky in a controlled premium setting could make stargazing a sought-after and premium 
                        experience in 2035.
                        </p>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_technology.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_whyVTOL.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_group persona.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_persona.png" alt="Zenith" />
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Ideate</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ideate.png" alt="Zenith" />
                    </div>

            
 <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Vehicle Design</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_interior1.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_interior2.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_exterior1.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_exterior2.png" alt="Zenith" />
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Architecture</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_architect.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_architect ui.png" alt="Zenith" />
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">UI / UX Design</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_designsystem1.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_designsystem2.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ui1.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ui2.png" alt="Zenith" />
                    </div>
                    
                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ui3.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ui4.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ui5.png" alt="Zenith" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/zenith_ui6.png" alt="Zenith" />
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">UI / UX Design Animation</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='py-4 md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <video className="md:w-4/5" src="/images/Stargazing Mode 2.mp4" controls></video>
                    </div>

                    <div className='py-4 md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <video className="md:w-4/5" src="/images/Aurora UI Final Final.mp4" controls></video>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Final Concept Animation</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='py-4 md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <video className="md:w-4/5" src="/images/Zenith Final Concept Animation.mp4" controls></video>
                    </div>
                    

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>What I've learned from this project ?</p>
                        <p>Over the past three months dedicated to this project, I've gained invaluable insights into designing
                                a futuristic vehicle experience. This project has provided me with a 
                                fresh perspective and a wealth of new knowledge. The collaborative nature of the project 
                                significantly enhanced my teamwork skills, as I had the chance to closely 
                                collaborate with individuals from diverse backgrounds. This experience 
                                has not only broadened my understanding of vehicle design but has also fostered effective 
                                communication and cooperation within the team.</p>
                    </div>



                </div>
            </div>
        </Layout>
    );
}