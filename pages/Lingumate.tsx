import Layout from '../components/layout';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-16 font-light flex flex-col'>
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
                    <div className='md:w-2/5'>
                        <p className="font-bold text-white text-xl md:text-2xl">
                            Lingumate
                        </p>
                        <p className="text-white text-l md:text-xl">UX / UI</p>
                        <p className="text-white my-7 text-l md:text-xl">
                            Lingumate is a language learning app that aims to revolutionize the way individuals acquire new languages.
                            With its innovative features and user-friendly interface, Lingumate provides a personalized and immersive learning experience.
                        </p>
                    </div>
                    <img className="md:w-3/5" src="/images/lingumate-imgfinal.png" alt="Lingumate" />
                </div>
                <div className="flex-grow border-t-2 border-gray-400" />

                <div className='md:mx-[5vw]'>
                    <div className='md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5">
                            <p className="font-bold text-l md:text-xl">Duration</p>
                            <p>2 Months</p>
                            <p className="font-bold text-l md:text-xl mt-4">Team</p>
                            <p>Nutcha / Punnath</p>
                            <p className="font-bold text-l md:text-xl mt-4">Role</p>
                            <p>UX Researcher / UX Designer</p>
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p>
                                The Language Learning Market is experiencing significant growth, expected to reach USD <span className="font-medium" style={{ color: "#A8A7C0" }}> 191.06</span> Billion by
                                <span className="font-medium" style={{ color: "#A8A7C0" }}> 191.06 </span> with a CAGR of <span className="font-medium" style={{ color: "#A8A7C0" }}>18.3%</span> over the forecast period, from its valuation of <span className="font-medium" style={{ color: "#A8A7C0" }}>USD 59.60 Billion</span> in 2021.
                            </p>
                            <p className='mt-4'>
                                With an abundance of language learning apps saturating the market, it begs the question :</p>
                            <p className='mt-4'>
                                Do these applications <span className="font-medium" style={{ color: "#A8A7C0" }}>genuinely empower</span> users to
                                <span className="font-medium" style={{ color: "#A8A7C0" }}> embark</span> on a journey of <span className="font-medium" style={{ color: "#A8A7C0" }}>learning </span>
                                and <span className="font-medium" style={{ color: "#A8A7C0" }}>unleash</span> their <span className="font-medium" style={{ color: "#A8A7C0" }}>maximum potential</span>?</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Research</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='mt-4'>The language learning app market experienced a significant surge in revenue, reaching a staggering <span className="font-medium" style={{ color: "#A8A7C0" }}>$2.92 billion </span>
                                in 2021, reflecting a remarkable <span className="font-medium" style={{ color: "#A8A7C0" }}>year-on-year growth</span> of
                                <span className="font-medium" style={{ color: "#A8A7C0" }}> 65%</span>.</p>
                            <p className='mt-4'>The report highlights  <span className="font-medium" style={{ color: "#A8A7C0" }}>Ai</span> and  <span className="font-medium" style={{ color: "#A8A7C0" }}>ML</span> as key technologies
                                <span className="font-medium" style={{ color: "#A8A7C0" }}> fueling innovation</span> in language learning apps,  <span className="font-medium" style={{ color: "#A8A7C0" }}>enabling personalized</span> learning experiences,
                                speech recognition, and language translation.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">User Survey</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='mt-4 font-bold'>Q : How important do you think personalization is for language learning apps?</p>
                            <p className='mt-4 font-medium'>From scale 1 - 5</p>
                            <p className='mt-4 font-medium'>22/27 people consider it highly significant. <span className="font-bold text-3xl" style={{ color: "#A8A7C0" }}>81.48%</span></p>
                            <p className='mt-10 font-bold'>Q : How do you measure your progress in learning a new language?</p>
                            <p className='mt-4 font-medium'><span className="font-bold text-3xl" style={{ color: "#A8A7C0" }}>60%</span><span className="font-medium" style={{ color: "#A8A7C0" }}>  Measuring fluency </span>
                                (e.g. ability to have conversations)</p>
                            <p className='mt-4 font-medium'><span className="font-bold text-3xl" style={{ color: "#A8A7C0" }}>40%</span><span className="font-medium" style={{ color: "#A8A7C0" }}>  Achieving specific learning goals </span>
                                (e.g.passing a language proficiency test)</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">User Interview</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='mt-4 font-bold'>Q : How important do you think personalization is for language learning apps?</p>
                            <p className='my-4 font-medium'>3/3 people consider it highly significant.</p>
                            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl">
                                <p className='font-medium'>💜 Should prioritize personalization based on individual learning styles, pace, and objectives.</p>
                            </div>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 items-center w-full'>
                        <div className="text-white text-l md:text-xl md:w-2/5 inline-flex items-center">
                        </div>
                        <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 text-white text-l md:text-xl md:w-3/5">
                            <p className='font-medium'>💜 Maintain user motivation and engagement.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='my-4 font-bold'>Q : What are your overall thoughts on the potential of AI-powered language learning apps to revolutionize language education?</p>
                            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl">
                                <p className='font-medium'>💜 Delivering effective, personalized, and engaging learning experiences.</p>
                            </div>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 items-center w-full'>
                        <div className="text-white text-l md:text-xl md:w-2/5 inline-flex items-center">
                        </div>
                        <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 text-white text-l md:text-xl md:w-3/5">
                            <p className='font-medium'>💜 AI algorithms analyze learners, adapt content, provide tailored recommendations.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='my-4 font-bold'>Q : How important is instant feedback and correction in language learning apps?</p>
                            <p className='my-4 font-medium'>2/3 people consider it highly significant.</p>
                        </div>
                    </div>

                    <div className='md:inline-flex md:space-x-10 items-center w-full'>
                        <div className="text-white text-l md:text-xl md:w-2/5 inline-flex items-center">
                        </div>
                        <div className='font-medium text-white text-l md:text-xl md:w-3/5'>
                            <p>“Instant feedback and correction are essential in language learning apps to <span className="font-medium" style={{ color: "#A8A7C0" }}>help users identify</span> and correct mistakes promptly.”</p>
                            <p className='my-4'>“Enable users to correct mistakes promptly and progress faster.”</p>
                        </div></div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Learning from Insights</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='mt-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Limited time</span> : Many language learners face the obstacle of having limited time available to study and practice, which can slow down progress and make it harder to achieve their goals.</p>
                            <p className='mt-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Goal to communicate</span> : For many language learners, the main goal is to be able to communicate effectively in the new language, whether it's for personal or professional reasons.</p>
                            <p className='mt-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Desire to track progress</span> : Learners often want to be able to track their progress over time, whether through formal assessments or informal measures such as conversations with native speakers or keeping a language learning journal.</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Ideate</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 text-white text-l md:text-xl md:w-3/5">
                            <p className='mt-4 font-bold'>Target Audience</p>
                            <p className='mt-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Student</span> study foreign languages.</p>
                            <p className='mt-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Travelers</span> wanting to communicate effectively in different countries.</p>
                            <p className='mt-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Professionals</span> seeking to improve language skills for career advancement.</p>
                        </div>
                    </div>

                    <div className="mt-14 mb-4 md:mt-20 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>Affinity Map</p>
                    </div>
                    <div className='md:inline-flex md:space-x-10 mt-10 mb-10 md:mb-20 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-affinity.png" alt="Lingumate" />
                    </div>


                    <div className="flex justify-center">
                        <div className="bg-neutral-700 rounded-lg py-4 md:py-10 px-10 md:px-20 text-white text-l md:text-xl md:w-3/5">
                            <p className="mt-4 font-bold">How Might We</p>
                            <p className="mt-4">How might we help users <span className="font-medium" style={{ color: "#A8A7C0" }}>track</span> their <span className="font-medium" style={{ color: "#A8A7C0" }}>progress</span> and <span className="font-medium" style={{ color: "#A8A7C0" }}>set achievable goals</span> for language learning?</p>
                            <p className="mt-4">How might we provide <span className="font-medium" style={{ color: "#A8A7C0" }}>personalized recommendations</span> for language learning <span className="font-medium" style={{ color: "#A8A7C0" }}>resources</span> based on the user's skill level?</p>
                            <p className="mt-4">How might we integrate language learning into users' <span className="font-medium" style={{ color: "#A8A7C0" }}>daily routines</span> and make it more <span className="font-medium" style={{ color: "#A8A7C0" }}>convenient</span> for them to <span className="font-medium" style={{ color: "#A8A7C0" }}>practice regularly</span>?</p>
                        </div>
                    </div>

                    <div className=" py-10 flex justify-center">
                        <div className="bg-neutral-700 rounded-lg py-4 md:py-10 px-10 md:px-20 text-white text-l md:text-xl md:w-3/5">
                            <p className="mt-4 font-bold">Solution</p>
                            <p className="mt-4">Imagine an impact of personalized insights that drive language learners to unlocking their full potential and accelerating their language learning journey.</p>
                        </div></div>

                    <div className="my-10 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>Idea Brainstorming</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4 w-full md:w-3/5">
                            <img className="w-full" src="/images/lingumate-idea01.png" alt="Lingumate" />
                            <img className="w-full" src="/images/lingumate-idea02.png" alt="Lingumate" />
                            <img className="w-full" src="/images/lingumate-idea03.png" alt="Lingumate" />
                            <img className="w-full" src="/images/lingumate-idea04.png" alt="Lingumate" />
                        </div>
                    </div>

                    {/* <div className="mt-14 mb-4 md:mt-20 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>Concept Refinement</p>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-refinement.png" alt="Lingumate" />
                    </div>
                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-refinement02.png" alt="Lingumate" />
                    </div> */}

                    <div className="mt-14 mb-4 md:mt-20 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>User Flow</p>
                    </div>
                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-useflow.png" alt="Lingumate" />
                    </div>

                    {/* <div className="mt-14 mb-4 md:mt-20 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>Information Architecture</p>
                    </div>
                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-IA.png" alt="Lingumate" />
                    </div> */}

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">User Testing</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='mt-4'>Based on the feedback obtained from the user testing phase, adjustments were implemented to the wireframe design.</p>
                        </div>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-iteration01.png" alt="Lingumate" />
                    </div>
                    <div className='py-4 md:pb-24 text-white text-l md:text-xl items-center w-full'>
                        <p>To make it easier for users to track their progress, I made several modifications to the wireframe based on user testing. Specifically,
                            I moved the topic to the top of the screen and added a progress bar to the top to indicate the completion status of each task.
                        </p>
                    </div>

                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-iteration02.png" alt="Lingumate" />
                    </div>
                    <div className='py-4 md:pb-24 text-white text-l md:text-xl items-center w-full'>
                        <p>I made adjustments to the plan settings to enhance its clarity and user-friendliness. Additionally, I replaced the 'DONE' button with
                            'NEXT' to indicate to users that it's not the end of the process.
                        </p>
                    </div>


                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-iteration02.png" alt="Lingumate" />
                    </div>
                    <div className='py-4 md:pb-24 text-white text-l md:text-xl items-center w-full'>
                        <p>I reorganized the layout of the languages to a horizontal format.  I added a feature for daily goals to keep users motivated and on track
                            with their language learning progress. This feature encourages users to set specific goals for themselves each day and provides them with
                            a sense of accomplishment as they reach those goals.
                        </p>
                    </div>


                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Design</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                        </div>
                    </div>

                    <div className="mt-14 mb-4 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>Color Palette & Typography</p>
                    </div>
                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-ui.png" alt="Lingumate" />
                    </div>

                    <div className="mt-14 mb-4 md:mt-20 flex justify-center text-white text-l md:text-xl">
                        <p className='font-bold'>Logo Design</p>
                    </div>
                    <div className='md:inline-flex md:space-x-10 my-10 items-center justify-center w-full'>
                        <img className="md:w-3/4" src="/images/lingumate-ui02.png" alt="Lingumate" />
                    </div>

                    <div className='pt-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Final Deliverables</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <p className='my-4 text-white text-l md:text-xl'>Key Factors to Consider</p>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/lingumate-mvp01.png" alt="Lingumate" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/lingumate-mvp02.png" alt="Lingumate" />
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/lingumate-mvp03.png" alt="Lingumate" />
                    </div>

                    <div className="py-10 text-white text-l md:text-xl flex items-center justify-center w-full flex-col md:flex-row">
                        <button className="bg-black border-2 border-white hover:scale-105 text-white font-medium py-4 px-4 rounded" onClick={() => window.open('https://www.figma.com/proto/Ld8hbEj4YJmta080Azoe5K/Lingumate-Draft?page-id=0%3A1&type=design&node-id=40-2043&viewport=1153%2C1443%2C0.12&scaling=scale-down&starting-point-node-id=135%3A8468&show-proto-sidebar=1', '_blank')}>
                            MVP 01 Prototype
                        </button>
                        <div className='py-4 md:pl-4'>
                            <button className="bg-black border-2 border-white hover:scale-105 text-white font-medium py-4 px-4 rounded" onClick={() => window.open('https://www.figma.com/proto/Ld8hbEj4YJmta080Azoe5K/Lingumate-Draft?page-id=0%3A1&type=design&node-id=52-5849&viewport=1153%2C1443%2C0.12&scaling=scale-down&starting-point-node-id=52%3A5849&show-proto-sidebar=1', '_blank')}>
                                MVP 02 & 03 Prototype
                            </button></div>
                    </div>


                    <div className='py-4 md:inline-flex md:space-x-10 md:mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Evaluation</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <p className='py-4 font-medium'>User Testing</p>
                            <p>I conducted user testing on key features, focusing on <span className="font-medium" style={{ color: "#A8A7C0" }}> gathering feedback </span> and <span className="font-medium" style={{ color: "#A8A7C0" }}> insights </span> from users.
                                The testing process involved observing how users interacted with these features and gathering their <span className="font-medium" style={{ color: "#A8A7C0" }}> overall feedback </span> on <span className="font-medium" style={{ color: "#A8A7C0" }}> usability </span> and <span className="font-medium" style={{ color: "#A8A7C0" }}> satisfaction </span>.
                            </p>
                        </div>
                    </div>


                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">User Feedback</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                        <div className="text-white text-l md:text-xl md:w-3/5">
                            <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 py-10 text-white text-l md:text-xl">
                                <p className='font-medium'>“I would love more challenging features to keep me motivated.“</p></div>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 items-center w-full'>
                        <div className="text-white text-l md:text-xl md:w-2/5 inline-flex items-center">
                        </div>
                        <div className="bg-neutral-700 rounded-lg py-4 px-10 md:px-20 text-white text-l md:text-xl md:w-3/5">
                            <p className='font-medium'>“I think if the study plan provides more detailed information, it would be better for users to know what they should work on.”</p>
                        </div>
                    </div>

                    <div className='py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Final Deliverables 2</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>
                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/lingumate-postmvp01.png" alt="HealthPath" />
                    </div>
                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/lingumate-postmvp02.png" alt="HealthPath" />
                    </div>
                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/lingumate-postmvp03.png" alt="HealthPath" />
                    </div>

                    <div className='pt-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">What I've learned from this project</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>
                    <div className='py-4 text-white text-l md:text-xl items-center w-full'>
                        <p>💛 The value of conducting user research and usability testing to gather feedback and improve the app's design and functionality. </p>
                        <p>💛 The significance of understanding user needs and preferences in designing language learning apps. </p>
                        <p>💛 The need to strike a balance between aesthetics and functionality to create an engaging and visually appealing app </p>
                    </div>

                    <div className='pt-10 mt-10 items-center w-full'>
                        <div className="text-white my-7 text-l md:text-xl md:w-2/5 inline-flex items-center">
                            <p className="font-bold text-l md:text-xl">Limitations & Concerns</p>
                            <div className="border-b-2 border-gray-400 w-16 ml-4" />
                        </div>
                    </div>
                    <div className='py-4 text-white text-l md:text-xl items-center w-full'>
                        <p><span className="font-bold" style={{ color: "#A8A7C0" }}>Technical Feasibility</span> : Developing an AI-powered language learning
                            app comes with certain technical challenges. The implementation and integration of AI algorithms and models require substantial computational resources
                            and expertise. Ensuring seamless performance and responsiveness of the app, especially during real-time interactions and feedback, may require
                            efficient server infrastructure and optimized algorithms.</p>
                        <p className='py-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Personalization and Data Privacy</span> : Personalization in an AI-powered language learning app
                            relies on collecting and analyzing user data, raising concerns about data privacy and security. App developers must prioritize privacy measures, transparent
                            data handling practices, and obtain user consent for data usage.</p>
                        <p className='py-4'><span className="font-bold" style={{ color: "#A8A7C0" }}>Continuous Improvement</span> : AI should be continuously updated and improved based on user feedback
                            and evolving language trends. Regular updates, bug fixes, and adding new features and content ensure that the app remains relevant and effective for learners.</p>
                    </div>

                    <div className='md:py-4 md:inline-flex md:space-x-10 mt-10 items-center w-full'>
                        <img className="w-full" src="/images/Lingumate.png" alt="Lingumate" />
                    </div>





            






                </div>
            </div>
        </Layout>
    );
}