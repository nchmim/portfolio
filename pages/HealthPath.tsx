import Layout from '../components/layout';

export default function MyApp() {
  return (
    <Layout>
      <div className='space-y-16 font-light flex flex-col'>
        <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
          <div className='md:w-2/5'>
            <p className="font-bold text-white text-xl md:text-2xl">
              HealthPath
            </p>
            <p className="text-white text-l md:text-xl">UX / UI</p>
            <p className="text-white my-7 text-l md:text-xl">
              HealthPath is a mobile application that helps people develop healthy habits and achieve their health goals.
            </p>
          </div>
          <img className="md:w-3/5" src="/images/healthpath_cover.png" alt="HealthPath" />
        </div>
        <div className="flex-grow border-t-2 border-gray-400" />

        <div className='md:mx-[5vw]'>
          <div className='md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
              <p className="font-bold text-l md:text-xl">Duration</p>
              <p>15 weeks</p>
              <p className="font-bold text-l md:text-xl mt-4">Role</p>
              <p>UX Researcher / UX/UI Designer</p>
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>
                Technology has made life more convenient than ever before. Entertainment is never more than seconds away.
                A few taps can bring food and goods straight to your door.
              </p>
              <p className='mt-4'>
                But in a world of instant gratification, what has happened to our ability to do things without instant payoff?
                To goals that require <span className="font-medium" style={{ color: "#F37601" }}>patience</span> and
                <span className="font-medium" style={{ color: "#F37601" }}> long-term commitment</span>?
              </p></div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Problem</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>
                <span className="font-medium text-xl md:text-3xl" style={{ color: "#F37601" }}>79%</span> of Americans say they're likely to
                <span className="font-medium" style={{ color: "#F37601" }}> revert</span> to previous <span className="font-medium" style={{ color: "#F37601" }}>eating behaviors </span>
                after completing or giving up on a diet.
              </p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Challenge</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>
                How Might We leverage technology’s ability to deliver instant gratification to help individuals
                <span className="font-medium" style={{ color: "#F37601" }}> build</span> and <span className="font-medium" style={{ color: "#F37601" }}>sustain</span> healthy habits in their everyday lives?
              </p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Research</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p className="font-medium">Key Areas of Understanding</p>
              <p className="mt-4">🧡 To understand the <span className="font-medium" style={{ color: "#F37601" }}>factors</span> that drive individuals to
                <span className="font-medium" style={{ color: "#F37601" }}> adopt</span> and <span className="font-medium" style={{ color: "#F37601" }}>maintain</span> healthy habits.</p>
              <p>💜 To understand the <span className="font-medium" style={{ color: "#F37601" }}>development</span> and <span className="font-medium" style={{ color: "#F37601" }}>reinforcement</span> of healthy habits emerged.</p>
              <p>💚 To understand the <span className="font-medium" style={{ color: "#F37601" }}>process</span> of <span className="font-medium" style={{ color: "#F37601" }}>setting</span> and
                <span className="font-medium" style={{ color: "#F37601" }}> achieving</span> health-related goals.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">User Interview</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>Upon gathering information from the participants, I have distilled their insights into three key categories.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-bold' style={{ color: "#F37601" }}>Motivations</p>
              <p>Focuses on understanding the factors that drive individuals to adopt and maintain healthy habits.</p>
              <p className='font-bold mt-4' style={{ color: "#85CCA6" }}>Habits</p>
              <p>The development and reinforcement of healthy habits.</p>
              <p className='font-bold mt-4 ' style={{ color: "#8787C1" }}>Goals</p>
              <p>Setting and achieving health-related goals.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Responses from Interviews</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'>“I don’t set high goals right away. Instead, I decided to go slow, make things easy and convenient, and have a long-term mindset.”</p>
              <p className='pt-4'>🥑 Focus on long-term, go slow and make it a habit.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='pt-4 font-medium'> “I set a short goal to be proud with myself and stay motivated.“</p>
              <p className='font-medium'> “I want to build a good pattern for a good habit.“</p>
              <p className='pt-4'>🍅 Build a routine that will lead to a good habit.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5">
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p className='font-medium'> “I want to see my progress to keep myself motivated.“</p>
              <p className='pt-4'>🌽 Seeing a progress helps maintain user motivation.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">User Surveys</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl md:w-3/5">
              <p><span className="font-medium text-xl md:text-3xl" style={{ color: "#F37601" }}>66.7%</span> of participants willing to dedicate some time and effort for health and top 5 motivations are</p>
              <p className='pt-4 pb-2'>❤️ Good shape</p>
              <p className='py-2'>🧡 Be healthy</p>
              <p className='py-2'>💛 Self-improvement</p>
              <p className='py-2'>💚 Good mental health</p>
              <p className='py-2'>💙 Better fitness / performance in activities</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Learning from Insights</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p className='py-2'>Becoming healthier is an important goal for many individuals.</p>
              <p className='py-2'>The insights indicate that individuals are interested in maintaining healthy habits over time.</p>
              <p className='py-2'>It appears that people are willing to invest significant time and effort in pursuing better health outcomes.</p>
            </div>
          </div>

          <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Solution</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>An <span className="font-medium" style={{ color: "#F37601" }}>easy access</span> product that provide <span className="font-medium" style={{ color: "#F37601" }}>personalized guidance</span> that's <span className="font-medium" style={{ color: "#F37601" }}>customized</span> to each individual's unique lifestyle and activity patterns.</p>
            </div>
          </div>

          {/* <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-empathymap.png" alt="HealthPath" />
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-affinitymap.png" alt="HealthPath" />
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-taskmap.png" alt="HealthPath" />
          </div> */}

        <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Define</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p className='py-2'>I discovered a consistent pattern of information based on my research, as well as user surveys and interviews.</p>
              <p className='py-2'>To maintain a healthy lifestyle, it is best to prioritize the progress of long-term habits that require little effort, 
                rather than relying solely on short-term motivation.</p>
                <p className='py-2'>Creating a habit requires consistent and repetitive behavior over time, until it becomes automatic and ingrained.</p>
            </div>
          </div>


          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-userflow.png" alt="HealthPath" />
          </div>

          <div className='py-4 md:pb-10 text-white text-l md:text-xl items-center w-full'>
            <p>I created a user flow to illustrate the sequence of actions that a user follows, starting from when they launch the app, up until the 
          point where they explore and discover various functions available in the app.
             </p>
          </div>

    

          <div className='py-10 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Usability Testing & Iteration</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>I conducted a usability testing to gather feedback from potential users, the key areas that I focused attention for design refinement are</p>
              <p className='py-2'>1. User Interface (UI)</p>
              <p className='py-2'>2. Navigation</p>
              <p className='py-2'>3. Usability</p>
            </div>
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-usertesting01.png" alt="HealthPath" />
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-usertesting02.png" alt="HealthPath" />
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-usertesting03.png" alt="HealthPath" />
          </div>

          <div className='py-10 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Design & Branding</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            <div className="text-white text-l md:text-xl md:w-3/5">
              <p>I focus on creating a design that not only looks great but also effectively communicates the brand's
                values and personality. I utilized the golden ratio as a guiding principle in the design process.</p>
            </div>
          </div>
          

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center justify-center w-full'>
            <img className="w-full" src="/images/healthpath-branding01.png" alt="HealthPath" />
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <img className="w-full" src="/images/healthpath-branding02.png" alt="HealthPath" />
          </div>

          <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <img className="w-full" src="/images/healthpath-branding03.png" alt="HealthPath" />
          </div>

          <div className='pt-10 mt-10 items-center w-full'>
            <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
              <p className="font-bold text-l md:text-xl">Final Design</p>
              <div className="border-b-2 border-gray-400 w-16 ml-4" />
            </div>
            {/* <p className='my-4 text-white text-l md:text-xl'>Key Features</p> */}
          </div>





          <div className='md:pt-7 text-white text-l md:text-xl items-center w-full'>
            <p className='py-2 font-bold'>Goal Customization</p>
            <p>Allows users to track their journey and visualize their data in a meaningful and informative way. This feature enables users
              to monitor their progress, identify trends, and make data-driven decisions to support their health and wellness goals.</p>
          </div>
           <div className='md:pb-7 md:inline-flex md:space-x-10 my-10 items-center w-full'>
            <img className="w-full" src="/images/Healthpath_feature01.gif" alt="HealthPath" />
          </div>

        <div className='pt-7 text-white text-l md:text-xl items-center w-full'>
            <p className='py-2 font-bold'>Progress Record  &  Data Visualization</p>
            <p>This feature allows users to tailor their health and wellness objectives according to their unique needs, preferences, and aspirations.
              By providing users with the ability to customize their goals, the app aims to create a personalized and empowering experience that fosters
              motivation and progress.</p>
          </div>
          
          <div className='md:pb-7 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <img className="w-full" src="/images/Healthpath_feature02.gif" alt="HealthPath" />
          </div>

         <div className='pt-7 text-white text-l md:text-xl items-center w-full'>
            <p className='py-2 font-bold'>Personalized Plan</p>
            <p>This feature aims to provide users with tailored guidance and recommendations based on their individual needs, preferences, and goals.
              This feature allows users to create a customized plan that aligns with their specific requirements and maximizes their chances of success
              in achieving their health and wellness objectives.</p>
          </div>

          <div className='md:pb-7 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <img className="w-full" src="/images/Healthpath_feature03.gif" alt="HealthPath" />
          </div>

        


          <div className='pt-7 text-white text-l md:text-xl items-center w-full'>
            <p className='py-2 font-bold'>Reward & redemption</p>
            <p>This feature provides users with incentives, rewards, and a system for redeeming them based on their progress and engagement with the app.
              This feature aims to motivate and reinforce positive behaviors, ultimately encouraging users to stay committed to their health and wellness goals.</p>
          </div>

          <div className='md:pb-7 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
            <img className="w-full" src="/images/Healthpath_feature04.gif" alt="HealthPath" />
          </div>

          <div className='py-10 text-white text-l md:text-xl items-center w-full'>
                        <p className='font-bold'>  What I’ve learned from this project?</p>
                        <p className='mt-4 font-bold'>Listen to user needs</p>
                        <p>Understanding and meeting the needs of users is paramount in creating a health app that delivers value and meets their 
                        expectations. By attentively listening to their perspectives, I can incorporate these insights into the app's design and development. 
                        This process can result in an app that is well-received and frequently utilized by users, providing them with a meaningful and positive experience. 
                        In short, prioritizing the user's needs is key.</p>
                        <p className='mt-4 font-bold'>Research helps a lot</p>
                        <p>Research is an indispensable aspect of the app development process. Apart from comprehending the users' needs, research can assist developers in 
                          shaping many other facets of the app's design and development. By delving deeper into the research, developers can obtain insights into the app's 
                          competitors, market trends, and design considerations. This knowledge can be used to create an app that is user-focused, unique, and meets the 
                          market demands. </p>
                        
                    </div>

          <div className="py-10 text-white text-l md:text-xl flex items-center justify-center w-full flex-col md:flex-row">
            <button className="bg-black border-2 border-white hover:scale-105 text-white font-medium py-4 px-4 rounded" onClick={() => window.open('https://www.figma.com/proto/udJeCXf6DvOA0sufNFROpe/Health-Path?page-id=0%3A1&type=design&node-id=104-867&viewport=643%2C4905%2C0.21&scaling=contain&starting-point-node-id=104%3A867', '_blank')}>
              View Full Case Study
            </button>
            <div className='py-4 md:pl-4'>
              <button className="bg-black border-2 border-white hover:scale-105 text-white font-medium py-4 px-4 rounded" onClick={() => window.open('https://www.figma.com/proto/mJHwfRPTm25VMLnVMne941/HealthPath-Wireframe?page-id=0%3A1&type=design&node-id=2-2&viewport=462%2C503%2C0.33&scaling=scale-down&starting-point-node-id=12%3A13&show-proto-sidebar=1', '_blank')}>
                View Prototype
              </button></div>
          </div>







        </div>
      </div>
    </Layout>
  );
}