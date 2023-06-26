import Layout from '../components/layout';
import GridScramble from '../components/GridScramble';

export default function MyApp() {
    return (
        <Layout>
            <div className='space-y-12 font-light flex flex-col'>
                <div className='md:mx-[5vw]'>
                   
                <div className='md:inline-flex md:space-x-10 mt-10 items-center'>
          <div className='md:w-3/5'>
            <p className="font-bold text-white text-2xl md:text-3xl">
              Welcome to My Playground
            </p>
            <p className="text-white my-4 md:my-7 text-l md:text-xl">
            I thrive on creative exploration, constantly pushing boundaries and seeking inspiration beyond my projects :-D
            </p>
          </div>
          <img className="md:w-1/3" src="/images/NCH_chrome.png" alt="HealthPath" />
          {/* <div className='text-white text-8xl font-serif'>
          <GridScramble>NUTCHA</GridScramble>
          </div> */}
        </div>
        <div className="flex-grow border-t-2 mb-10 md:mb-20 border-gray-400" />


        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-7 gap-x-4">
      <div>
          <img src="/images/artwork02.png" alt="HealthPath" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/FAKE_Graphic.png" alt="NAYA" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/artwork04.png" alt="CinemAR" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/artwork05.jpg" alt="NAYA" className="w-full h-auto" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-4">
      <div>
          <img src="/images/artwork06.jpg" alt="HealthPath" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/artwork08.jpg" alt="CinemAR" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/artwork01.jpg" alt="CinemAR" className="w-full h-auto" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 my-7 gap-x-4">
    <div>
          <img src="/images/artwork03.png" alt="CinemAR" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/artwork07.1.png" alt="HealthPath" className="w-full h-auto" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 my-7 gap-x-4">
      <div>
          <img src="/images/artwork09.png" alt="HealthPath" className="w-full h-auto" />
      </div>
      <div>
          <img src="/images/artwork10.png" alt="CinemAR" className="w-full h-auto" />
      </div>
    </div>



                </div>
            </div>
        </Layout>
    );
}