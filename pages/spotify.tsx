import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
                    <div className='md:w-2/5'>
                        <p className="font-bold text-white text-xl md:text-2xl">
                            Spotify Case Study
                        </p>
                        <p className="text-white text-l md:text-xl">UX / UI</p>
                        <p className="text-white my-7 text-l md:text-xl">
                        
The Spotify Localized Content Case Study aims to delve into how Spotify leverages the power of music to foster stronger local connections among its users. This case study seeks to understand how the platform facilitates a deeper sense of community and belonging on a local level.
                        </p>
                    </div>
                    <img className="md:w-3/5" src="/images/spotify_cover.png" alt="IG" />
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
                            Spotify reigns supreme as the world's foremost music streaming application, 
                            boasting a staggering user base of over 220 million subscribers worldwide. 
                            This widespread acclaim can be attributed to its expertly curated playlists 
                            and tailored recommendations, which have seamlessly integrated themselves 
                            into the daily routines of countless individuals. Spotify has become an 
                            integral aspect of their musical journey, serving as the rhythmic pulse 
                            that connects them with the tunes and harmonies that deeply resonate with 
                            their inner selves.
                            </p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Overview</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>As a devoted Spotify enthusiast, I've come to appreciate the platform's exceptional music suggestions and 
                                curated playlists. I'm genuinely intrigued to discover how Spotify can elevate the sense of community among 
                                its users on a local level.</p>
                        </div>
                    </div>
                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">GOAL</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>Create a more <span className="font-medium" style={{ color: "#F0913E" }}>inclusive</span>, <span className="font-medium" style={{ color: "#EB5640" }}>culturally relevant</span>, and <span className="font-medium" style={{ color: "#8C3EF0" }}>engaging</span> experience for users across different regions and languages.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Research</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p className="font-medium">To get a better understanding of what users were thinking
               and what they needed, I chose to center my research around these key questions.</p>
              <p className="mt-4">💚 When it comes to discovering new music, how important is it for you to know what songs are currently popular in your neighborhood or city?</p>
              <p className='py-2'>❤️ How do you currently stay updated on music trends and what's popular in your local community?</p>
              <p className='py-2'>🧡 Have you ever wanted to share your music preferences or playlists with others in your local area? What motivated you to do so, and how did you go about it?</p>
              <p className='py-2'>💜 In what ways could Spotify enhance its platform to help you better connect with your community?</p>
            </div>
          </div>

          <div className='py-2 md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">User Research</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>"When I'm out and about, I hear catchy tunes playing at cafes and bars. I wish I could easily find out which songs are popular in my city."</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>“Knowing what songs are popular in my neighborhood or city is quite important to me. 
              I love feeling connected to my people neighborhood."</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>“I like knowing what my fellow locals are listening to. It'd be a cool feature to see the
               top songs in my town or neighborhood."</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>“Listening to local radio is hit or miss. I'd appreciate a way to identify and 
              explore the songs that are currently popular in my area."</p>
            </div>
          </div>


          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Define Problem</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>By listening to users' thoughts and opinions, I aimed to gain a better understanding of what they truly need.</p>
                        </div>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/spotify_problems.png" alt="IG" />
                    </div>
              

                    <div className='py-2 md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Ideate</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>HMW enable users to share and explore the music preferences of their neighbors or fellow locals?</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>HMW make it effortless for users to discover and save songs they hear in everyday situations?</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>HMW create a feature that allows users to discover the most popular songs in their local area?</p>
            </div>
          </div>
                 
 <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Thoughtful Execution</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        <p>To ensure I maintain a deliberate approach and avoid introducing solutions hastily, I rely on the 
                            'Thoughtful Execution tree.' This framework reminds me of the essential steps in a methodical product 
                            development process, encouraging me to systematically explore various problem facets and hypotheses before narrowing down to a single solution.</p>
                        </div>
                    </div>

            
            
                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/executiontree.png" alt="Spotify Thoughtful Execution Tree" />
                    </div>

                    <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>Solutions</p>
                        <p>After ideating and carefully execute solutions based on user needs, 
                            I've amalgamated two impactful features: Localized Popularity Charts 
                            and Nearby Music Discovery. These particular features resonate most 
                            strongly with user needs, as they cater to the desire for real-time 
                            access to popular music in their vicinity while also fulfilling the 
                            curiosity to explore the musical preferences of their neighbors.
                        </p>
                    </div>

                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/spotify-01.png" alt="IG" />
                    </div>
                   
                    <div className='md:py-10 md:inline-flex md:space-x-10 items-center justify-center w-full'>
                        <img className="md:w-4/5" src="/images/spotify-02.png" alt="IG" />
                    </div>

                    <div className='pt-10 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>How can these features enhance the user satisfaction with Spotify ?</p>
                    </div>

                    <div className='pb-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>Relevance and Personalization</p>
                        <p>💚 Users can discover music that resonates with their regional or local preferences. It makes the listening experience more relevant, as it showcases what's popular in their area.</p>
                            <p>💚 Instant song recognition enables users to identify and 
                                enjoy songs they hear in their surroundings. This feature 
                                caters to immediate music preferences, making the experience 
                                highly personalized.</p>
                    </div>

                    <div className='pb-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>Community Engagement</p>
                        <p>❤️ Users feel connected to their local music community, as they can see what their neighbors are listening to. This fosters a sense of belonging and community engagement.</p>
                    </div>

                    <div className='pb-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>Discovery and Exploration</p>
                        <p>🧡 Users can explore local music scenes, discover emerging artists, and enjoy songs that are trending in their region. It encourages musical exploration beyond mainstream hits.</p>
                            <p>🧡 It facilitates spontaneous music discovery. When users hear a song they like, they can identify it instantly and add it to their playlists or library, expanding their musical horizons.</p>
                    </div>

                    <div className='pb-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold pb-4'>Timeliness</p>
                        <p>💜 Real-time updates keep users informed about the latest music trends and releases in their area. It ensures they are always up-to-date with the local music scene.</p>
                            <p>💜 Users can identify songs as they hear them, preventing the frustration of not knowing a song's title or artist in real-time.</p>
                    </div>


                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">What I've learned from this project ?</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>From this case study, I've learned that users have a strong desire to feel connected to their community. Whether it's through shared music tastes, discovering local artists, or participating in music-related discussions, the sense of belonging to a musical community plays a vital role in their satisfaction. This connection not only fosters engagement but also enhances the overall user experience, as it creates a sense of unity and shared musical journey.</p>
                        </div>
                    </div>



                </div>
            </div>
        </Layout>
    );
}