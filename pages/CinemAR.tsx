import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
                    <div className='md:w-2/5'>
                        <p className="font-semibold text-white text-xl md:text-2xl">
                            CinemAR
                        </p>
                        <p className="text-white text-l md:text-xl">AR | UX / UI</p>
                        <p className="text-white my-7 text-l md:text-xl">
                            CinemAR is an innovative augmented reality (AR) product that provides users with an immersive visual encounter of movie scenes,
                            enabling them to capture themselves within the scenes exactly where they were originally filmed. </p>
                    </div>
                    <img className="md:w-3/5" src="/images/CinemARCover.gif" alt="CinemAR" />
                </div>
                <div className="flex-grow border-t-2 border-gray-400" />

                <div className='md:mx-[5vw]'>
                    <div className='md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5">
                            <p className="font-semibold text-l md:text-xl">Duration</p>
                            <p>12 weeks</p>
                            <p className="font-semibold text-l md:text-xl mt-4">Team</p>
                            <p>Nutcha / Punnath</p>
                            <p className="font-semibold text-l md:text-xl mt-4">Role</p>
                            <p>UX / UI Designer</p>
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>
                                <span className="font-medium text-xl md:text-3xl" style={{ color: "#BC615F" }}>96%</span> of Americans have visited places related to their favorite  television shows or movies at least once in their lifetime.
                            </p>
                            <p className='mt-4'>
                                <span className="font-medium text-xl md:text-3xl" style={{ color: "#BC615F" }}>35%</span> of film tourists seek an immersive experience to live out the storylines and explore the footsteps of famous characters from
                                their favorite TV shows or movies.
                            </p></div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Overview</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='font-medium'>
                                What makes movies so <span style={{ color: "#BC615F" }}>special</span> ?
                            </p>
                            <p className='font-medium'>Why do people <span style={{ color: "#BC615F" }}>enjoy</span> watching movies ?</p>
                            <p className='py-4'>  A movie can be special for its storytelling, cinematography, acting, and emotional resonance with its audience.
                                CinemAR is an augmented reality product that allows users to visually experience movie scenes and capture themselves within
                                the scene at the exact location where it was filmed. This app opens up new opportunities for improving travel experiences
                                and deepening understanding of the movie. CinemAR also functions as a platform for creative expression and social interaction,
                                allowing users to connect with and share their unique moment with others who share their love of movies and immersive experiences.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Research</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>
                                To gain insights into <span className='font-medium' style={{ color: "#BC615F" }}>individuals' perceptions</span> of <span className='font-medium' style={{ color: "#BC615F" }}>"cinematic moments"</span> their preferences for capturing the movie-watching experience,
                                and their current technology usage, as well as to build upon the existing academic research in this domain, we conducted a comprehensive
                                multi-method research study.
                            </p>
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/random99.png" alt="Research Methods" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='py-2 font-semibold'>What makes <span style={{ color: "#BC615F" }}>unforgettable moments</span> so uniquely <span style={{ color: "#BC615F" }}>special</span> and <span style={{ color: "#BC615F" }}>valued</span> by people?</p>
                        <p>Unforgettable moments hold a special place in people's hearts as they provide a source of meaningful and long-lasting memories.
                            In the realm of movies, these memories are often formed through the impactful storytelling, evocative emotions, and profound impact that a film can have on its
                            audience. When a movie deeply moves an individual, it has the power to stay with them for an extended period and become a cherished and unforgettable experience.
                        </p>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <img className="md:w-5/6" src="/images/cinemar01.png" alt="CinemAR" />
                    </div>

                    <div className='md:py-20 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/cinemar02.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>Based on the responses from user research, a hierarchy of interdependent components was formed, with emotion identified as the overarching factor
                            influenced by other components. The components in question are location, music, people, and time, all of which are ranked below emotion in the
                            hierarchy. Furthermore, these elements have lateral and pseudo-influencing relationships with one another. Finally, the experience produced by the
                            interaction of these components influences memory.
                        </p>
                    </div>

                    <div className='pt-10 pb-20 md:inline-flex md:space-x-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Extract Insights</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>
                                To gain insights into <span className='font-medium' style={{ color: "#BC615F" }}>individuals' perceptions</span> of <span className='font-medium' style={{ color: "#BC615F" }}>"cinematic moments"</span> their preferences for capturing the movie-watching experience,
                                and their current technology usage, as well as to build upon the existing academic research in this domain, we conducted a comprehensive
                                multi-method research study.
                            </p>
                        </div>
                    </div>

                    {/* <div className='md:py-20 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <img className="w-full" src="/images/cinemar-insights.png" alt="CinemAR" />
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4">
                        <img className="w-full" src="/images/CinemAR-insight01.png" alt="CinemAR" />
                        <img className="w-full" src="/images/CinemAR-insight02.png" alt="CinemAR" />
                        <img className="w-full" src="/images/CinemAR-insight03.png" alt="CinemAR" />
                        <img className="w-full" src="/images/CinemAR-insight04.png" alt="CinemAR" />
                    </div>

                    <div className='md:inline-flex md:space-x-10 mt-7 items-center justify-center w-full'>
                        <img className="md:w-2/4" src="/images/CinemAR-insight05.png" alt="CinemAR" />
                    </div>

                    

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Ideation</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/cinemar-affinity.png" alt="CinemAR" />
                    </div>

                    <div className='text-white font-semibold text-l md:text-xl md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <p>Affinity Map</p>
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>During the ideation phase of CinemAR, we employed the effective method of affinity mapping to collect and structure user feedback.
                            Our primary objective was to gain insights into how users perceive and engage with the popular locations featured in movie scenes. </p>
                        By utilizing affinity mapping, we were able to group and categorize the user feedback into two categories. This allowed us to uncover patterns and themes
                        related to users' perceptions and interactions during their visits to these iconic destinations.
                    </div>

                    <div className='md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/cinemar-userscenarios.png" alt="CinemAR" />
                    </div>

                    <div className='text-white font-semibold text-l md:text-xl md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
                        <p>Users Scenarios</p>
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>The two user scenarios we have can be represented visually through the following user flow.
                            This flow illustrates the sequence of actions that users take to participate in activities at the famous location.</p>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Idea Sketches</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-4">
                        <img className="w-full" src="/images/cinemar-ideasketches01.png" alt="CinemAR" />
                        <img className="w-full" src="/images/cinemar-ideasketches02.png" alt="CinemAR" />
                        <img className="w-full" src="/images/cinemar-ideasketches03.png" alt="CinemAR" />
                        <img className="w-full" src="/images/cinemar-ideasketches04.png" alt="CinemAR" />
                        <img className="w-full" src="/images/cinemar-ideasketches05.png" alt="CinemAR" />
                        <img className="w-full" src="/images/cinemar-ideasketches06.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Concept Refinement</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    {/* <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/cinemar-idearating.png" alt="CinemAR" />
                    </div> */}

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>By conducting brief semi-structured interviews and design evaluations, we engaged participants in providing subjective feedback on our sketches
                            and storyboards. This invaluable input helped us better understand how individuals perceived and evaluated our design concepts, allowing us to
                            narrow down our ideas and focus on those that best align with the purpose of our product.
                        </p>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/cinemar-ideasketches04.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-24 text-white text-l md:text-xl items-center w-full'>
                        <p>The most favored aspect among participants was the <span className='font-medium' style={{ color: "#BC615F" }}>AR Photo Filter</span> feature. This functionality allows users to select movie-themed filters that
                            superimpose virtual characters and scenes from their beloved films onto their photos or videos. By leveraging their smartphone's camera, users
                            can capture real-time photos or videos with these virtual elements, resulting in an interactive and dynamic experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4 my-10">
                        <img className="w-full" src="/images/cinemar-ideasketches02.png" alt="CinemAR" />
                        <img className="w-full" src="/images/cinemar-ideasketches05.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-24 text-white text-l md:text-xl items-center w-full'>
                        <p>In addition to the AR photo filter, we intend to incorporate additional features to enhance the overall appeal of the application. One such feature is the <span className='font-medium' style={{ color: "#BC615F" }}>tour guide</span>,
                            which will assist users in navigating to specific movie locations with precision and accuracy. Furthermore, we aim to introduce the <span className='font-medium' style={{ color: "#BC615F" }}>AR movie trivia</span> feature,
                            encouraging users to actively participate and unlock unique photo filters associated with each location. These additional functionalities are designed to elevate
                            user engagement and make the overall app experience even more captivating and immersive.
                        </p>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Design & Prototype</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/cinemar-design01.png" alt="CinemAR" />
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/cinemar-design02.png" alt="CinemAR" />
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/interactionmap.png" alt="CinemAR" />
                    </div>


                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">User Testing & Evaluation</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>
                                To carry out the evaluation phase, we implemented a task-oriented usability testing approach combined with the Retrospective Think-Aloud
                                method. This research methodology enabled us to gather user feedback in real-time on both our concept and prototype, specifically from our
                                target user demographic. Initially, we conducted tests with a small group of participants and incorporated their feedback to enhance our
                                digital prototype.
                            </p>
                        </div>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 md:my-20 items-center justify-center w-full'>
                        <img className="w-full" src="/images/cinemar-testing01.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Hi-fidelity Wireframe</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-2 md:my-4 items-center justify-center w-full'>
                        <img className="w-full" src="/images/cinemar-hifi03.1.gif" alt="CinemAR" />
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-2 md:my-4 items-center justify-center w-full'>
                        <img className="w-full" src="/images/cinemar-hifi02.3.gif" alt="CinemAR" />
                    </div>



                    <div className='flex items-center justify-center my-10 md:my-20'>
                        <iframe
                            width="960"
                            height="715"
                            src="https://www.youtube.com/embed/qK0tlksnpQA"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen // Add the allowFullScreen attribute
                        ></iframe>
                    </div>


                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Results</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>




                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-semibold'>  What I’ve learned from this project?</p>
                        <p className='my-4'>During this project, I had the opportunity to delve into various aspects of the application and explore ways to expand its
                            usage beyond its initial scope. This involved brainstorming and implementing new features and functionalities.</p>
                        <p className='my-4'>Engaging in this project provided me with the chance to explore and broaden the application's usage, while incorporating augmented reality
                            (AR) technology to enhance the user experience. It allowed me to delve into the realm of user-centric design and create an immersive and interactive
                            environment within the application.</p>
                        <p className='my-4'>Overall, this project has been a rewarding journey that has not only allowed me to contribute to the application's growth but has also enabled
                            me to gain valuable insights into the world of user experience, augmented reality, and application development.</p>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Limitation & Concern</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>
                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='mb-4 font-semibold'> Social Interactions and Offline Engagement</p>
                        <p className='my-4'>Excessive reliance on smartphones in outdoor settings can lead individuals to feel disconnected from the real world, raising concerns about reduced social
                            interactions and limited engagement in offline experiences.</p>
                        <p className='font-semibold'> Privacy</p>
                        <p className='my-4'>Users may have concerns about the app's access to their device's camera and the potential for unauthorized recording or capturing of personal moments.</p>
                        <p>The need for clear and transparent privacy policies to address user concerns about data security, consent, and control over their captured media.</p>
                    </div>



                </div>
            </div>
        </Layout>
    );
}