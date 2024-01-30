import React, { useContext, useEffect } from 'react'
import { Context } from '../context/contextApi'

import LeftNav from '../Components/LeftNav'
import VideoCard from './VideoCard'

const Feed = (props) => {
  const { loading, searchResult } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove('custom-h');
  }, []);



  return (
    <>
      <div className='flex flex-row h-[calc(100%-56px)] '>
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-auto bg-black ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
            {!loading && searchResult && searchResult?.map((item) => {
              if (item?.type !== 'video') return false;
              return (
                <>
                  <VideoCard key={item?.video?.videoId} video={item?.video} />
                </>
              )
            })}

          </div>

        </div>

      </div>
    </>
  )
}

export default Feed