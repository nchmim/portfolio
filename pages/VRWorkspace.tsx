import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
                    <div className='md:w-2/5'>
                        <p className="font-semibold text-white text-xl md:text-2xl">
                            VR Workspace
                        </p>
                        <p className="text-white text-l md:text-xl">Spatial UX / UI</p>
                        <p className="text-white my-7 text-l md:text-xl">
                            Virtual reality (VR) workspace is revolutionizing the way we work by immersing users in a virtual environment that mimics a physical workspace.
                            VR workspaces provide a three-dimensional and interactive experience that can enhance productivity, collaboration, and creativity.
                        </p>
                    </div>
                    <img className="md:w-3/5" src="/images/VR_wsp_01.gif" alt="VR Workspace" />
                </div>
                <div className="flex-grow border-t-2 border-gray-400" />

                <div className='md:mx-[5vw]'>

                    <div className='md:inline-flex md:space-x-10 mt-10 items-center w-full'>

                        <div className="text-white my-7 text-l md:text-xl md:w-2/5">
                            <p className="font-semibold text-l md:text-xl mt-4">Role</p>
                            <p>UX/UI Designer</p>
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>
                                In a world where remote work has become increasingly prevalent, VR workspaces offer a transformative solution that transcends the limitations
                                of traditional home offices. By immersing users in a virtual environment, these workspaces recreate the ambiance of a professional office setting,
                                complete with customizable features and tools tailored to individual work preferences.
                            </p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Goal</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>Create an immersive and engaging environment that stimulates productivity. Through realistic and interactive elements, users can tailor their virtual
                                workspace to mimic their ideal office setup, complete with customizable layouts. </p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Brainstorm</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>The brainstorming process was undertaken to explore creative ideas and possibilities that could enhance the VR workspace experience.
                                The goal was to generate innovative concepts that address the specific needs of individuals working from home. </p>
                        </div>
                    </div>

                    {/* <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>The brainstorming process was undertaken to explore creative ideas and possibilities that could enhance the VR workspace experience. 
                The goal was to generate innovative concepts that address the specific needs of individuals working from home.
                        </p>
                    </div> */}

                    <div className='md:py-20 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/123.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>After the brainstorming session, one of the key features that emerged was the ability for users to customize their virtual
                            workspace with multiple screens. This feature allows individuals to tailor their VR environment to mimic a physical multi-screen
                            setup, providing a familiar and efficient working experience.
                        </p>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Sketches</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        </div>
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>By sketching the interface, I could visualize different layouts and arrangements of elements, such as menus, buttons,
                            and interaction points, and determine which design solutions would optimize usability and user satisfaction. The sketches
                            allowed me to experiment with various concepts, evaluate their effectiveness, and make informed design decisions based on
                            user-centered principles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4">
                        <img className="md:w-wull" src="/images/wsp-navsketche.jpg" alt="CinemAR" />
                        <img className="md:w-full" src="/images/wsp-screensketch1.jpg" alt="CinemAR" />
                        <img className="md:w-full" src="/images/wsp-screensketch02.jpg" alt="CinemAR" />
                        <img className="md:w-full" src="/images/wsp-screensketch03.jpg" alt="CinemAR" />
                    </div>

                    {/* <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-navsketche.jpg" alt="CinemAR" />
                    </div>
                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-screensketch1.jpg" alt="CinemAR" />
                    </div>
                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-screensketch02.jpg" alt="CinemAR" />
                    </div>
                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-screensketch03.jpg" alt="CinemAR" />
                    </div> */}

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Planning</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        </div>
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>To optimize the user experience, it was crucial to understand the perspective of the user. With this in mind, I devised a plan to
                            arrange the screens in a curved formation around the user, ensuring that they would be positioned at the center of the VR workspace.
                        </p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-userpov.jpg" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>By adopting this approach, we aimed to leverage the full potential of the 360-degree space available in VR. Placing the user at the center
                            allowed for a more immersive and engaging experience, as they would be surrounded by the screens, providing a sense of being encompassed by
                            their work environment.
                        </p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-userpov2.jpg" alt="CinemAR" />
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-pov02.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>To enhance the user's focus on the main screen and create a clear visual hierarchy, I incorporated a dynamic lighting and blurring effect within the VR workspace.
                            When the user directs their attention to the main screen, the surrounding light is intentionally dimmed to draw the user's gaze and emphasize the importance of
                            the content displayed on that screen. By reducing the ambient lighting, distractions are minimized, allowing the user to concentrate on the primary task at hand.
                        </p>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Interaction</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        </div>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-image-user.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p>To provide an intuitive and interactive user experience, I implemented hand gesture control within the VR workspace. Users can navigate
                            and control the screens by simply moving their hands in up-down and left-right motions.
                        </p>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Design</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        </div>
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p> The primary focus of the design is to provide users with the ability to customize their workspace. This includes implementing a multi-screen
                            function that allows users to choose and adjust the layout according to their preferences.

                        </p>
                    </div>


                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-ui01.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center flex w-full justify-center'>
                        <p>Single Screen Interface</p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-ui02.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center flex w-full justify-center'>
                        <p>Multi Screen Interface</p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-ui03.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center flex w-full justify-center'>
                        <p>Multi Screen Interface</p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-2/3" src="/images/wsp-user-pov.png" alt="CinemAR" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center flex w-full justify-center'>
                        <p>User Perspective</p>
                    </div>

                    <div className='py-4 md:py-20 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <video className="md:w-2/3" src="/images/Spatial_UI01_Final.mp4" controls></video>
                    </div>


                    <div className='pb-10 md:pb-20 md:inline-flex md:space-x-10s items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-semibold text-l md:text-xl">Thoughts</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>I find the spatial design aspect of this project fascinating because it requires creating an experience that feels genuine and
                                tailored to the specific platform, following Apple's principles. This approach is interesting because it involves carefully
                                considering how the design elements work together in the given space, ultimately improving the overall experience for the user.</p>
                        </div>
                    </div>




                </div>
            </div>
        </Layout>
    );
}