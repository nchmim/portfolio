import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
                    <div className='md:w-2/5'>
                        <p className="font-bold text-white text-xl md:text-2xl">
                            IG Story Redesign
                        </p>
                        <p className="text-white text-l md:text-xl">UX / UI</p>
                        <p className="text-white my-7 text-l md:text-xl">
                        The IG Story Enhancement Case Study delves into the development of improved features for Instagram Stories, empowering users to unleash their 
                        creativity and personalize their story content in innovative ways.
                        </p>
                    </div>
                    <img className="md:w-3/5" src="/images/Cover_Black.png" alt="IG" />
                </div>
                <div className="flex-grow border-t-2 border-gray-400" />

                <div className='md:mx-[5vw]'>

                    <div className='md:inline-flex md:space-x-10 mt-10 items-center w-full'>

                        <div className="text-white my-7 text-l md:text-xl md:w-2/5">
                            <p className="font-bold text-l md:text-xl mt-4">Role</p>
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
                            <p className="font-bold text-l md:text-xl">Overview</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>As someone who loves using Instagram and regularly shares a bunch of stories, I noticed some areas where the Instagram Story feature
                                 could be even better. That's why I'm excited to work on improving the IG Story experience! My goal is to enhance user experience and 
                                 creativity. With a focus on customization and ease of use, the redesigned Instagram Story empowers users to create captivating and
                                  personalized stories.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Research</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>I conducted interviews with avid Instagram users who regularly post stories to understand their frustrations and concerns surrounding the
                                 platform's features. By engaging with these users, I sought to gain valuable insights into the challenges they face when sharing stories 
                                 and their desires for improvements that could enhance their experience. </p>
                        </div>
                    </div>


          <div className='py-2 md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">User Research</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>"I feel concerned about privacy when posting Instagram stories in real-time. Sometimes, I hesitate to share content immediately due to the real-time nature of the feature."</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>“It's annoying that I need to use my phone's camera first to adjust the lighting before uploading a photo to my Instagram story."</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>"I love sharing photos on my Instagram story, but I often wish I could edit them right after taking them. Sometimes the photos I take on Instagram don't look good, and I have to edit them using external apps."</p>
            </div>
          </div>


          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Define Problem</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>By gathering their insights, I sought to uncover the challenges they face in sharing captivating and personalized content. These insights
                                 allowed me to identify three primary issues and concerns that users commonly face.</p>
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Issue1.png" alt="IG" />
                    </div>
               {/* 
                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold'>Privacy Concern</p>
                        <p>Privacy is a significant concern for many users when it comes to posting Instagram stories. The real-time nature of this feature can make some 
                            individuals hesitant to share content immediately. 
                        </p>
                    </div> */}


                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Issue2.png" alt="IG" />
                    </div>
                  {/*   <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold'>Camera Lighting Control</p>
                        <p>The lack of lighting adjustment settings in the camera can be frustrating for certain users looking to capture high-quality photos 
                            for their Instagram stories, as they miss the opportunity to optimize the lighting conditions according to their preferences. Relying 
                            solely on the tap-to-focus feature may not adequately address the lighting issues, resulting in users desiring more control over the lighting conditions for their photos.
                        </p>
                    </div>
 */}
                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Issue3.png" alt="IG" />
                    </div>
                 {/*    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold'>Photo Editing</p>
                        <p>After capturing a photo for their Instagram story, users may desire additional editing options beyond the standard filters provided by the
                             platform. These options might include adjusting elements such as contrast, lighting, and other aspects of the photo to enhance its overall
                              appearance before sharing it with their followers.
                        </p>
                    </div> */}

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Ideate</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>How Might We enhance user preference and creativity on Instagram Stories to create more captivating and personalized content? </p>
                        </div>
                    </div>

                  {/*   <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Design</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5"></div>
                    </div> */}
 <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Initial Concept Exploration</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        <p>To ensure the interface's usability and functionality, I brainstorm and create multiple design concepts, each offering a different 
                                approach. This exploration allows me to explore various possibilities and identify the most effective and user-friendly interface 
                                for the project.</p>
                        </div>
                    </div>

            
            
                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Concept_Exploration1.png" alt="IG" />
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Concept_Exploration2.png" alt="IG" />
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Concept_Exploration3.png" alt="IG" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>Rating UI Layout Explorations</p>
                        <p>Following the exploration phase, I evaluated and rated the three explorations according to their ease of use, visual appeal,
                             accessibility, and efficiency. I ranked them on a scale from <span className="font-bold">5</span> (highly preferred) to <span className="font-bold">1</span> (not preferred).
                        </p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Rating.png" alt="IG" />
                    </div>
                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-2'>Exploration 1</p>
                        <p className='font-bold pb-2'>"Options at the bottom and Controls on the right"</p>
                        <p>was rated as "highly preferred" in several categories, including ease of use, accessibility, and efficiency. It received the highest score among all explorations.
                        </p>
                    </div>
                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Solutions</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5"></div>
                    </div>
                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Solution1.png" alt="IG" />
                    </div>
                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Solution2.png" alt="IG" />
                    </div>
                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/Solution3.png" alt="IG" />
                    </div>
                   
                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Measuring Success</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>To evaluate the success of these enhancements in the future, the following steps can be taken.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Qualitative</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>1. User Feedback: Gather feedback from users who have used the new enhancements. Conduct surveys or interviews to understand their overall 
                                satisfaction, ease of use, and any pain points they might have encountered.</p>
                            <p>2. User Experience: Monitor user interactions and behavior with the new features. Analyze how users engage with the enhancements and if they 
                                find them valuable in enhancing their Instagram Story experience.</p>
                            <p>3. User Retention: Measure whether users who have tried the new enhancements are more likely to continue using Instagram Stories regularly 
                                compared to those who haven’t.</p>
                        </div>
                    </div>
                    
                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Quantitative</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>1. Adoption Rate: Track the percentage of Instagram users who have adopted and actively use the new enhancements after their rollout.</p>
                            <p>2. Engagement Metrics: Measure changes in key engagement metrics such as the number of views, likes, and comments on Stories that have
                                 utilized the enhancements.</p>
                            <p>3. Conversion from Third-party Apps: Monitor the percentage of users who transition from using third-party apps for similar features to 
                                using the native Instagram enhancements.</p>
                            <p>4. Growth in Story Usage: Analyze if there is an increase in the frequency and duration of Instagram Story posting by users after the 
                                introduction of the new features.</p>
                            <p>5. User Reach: Assess whether the new enhancements lead to an increase in the reach and visibility of Stories, as measured by the number of unique viewers.</p>
                            <p></p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">What I've learned from this project ?</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>Throughout this case study, I’ve gained valuable insights into the significance of customization for users and how it can greatly impact 
                                their experience. Understanding their desires for greater control over their content made me realize the importance of crafting features 
                                that cater to their unique preferences and needs.</p>
                        </div>
                    </div>



                </div>
            </div>
        </Layout>
    );
}