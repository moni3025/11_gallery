import React,{useEffect, useState} from 'react'
import Card from './component/Card';

import axios from 'axios'


const App = () => {

const [userData, setUserData] = useState([]);
const [index, setIndex] = useState(1)


  const getData = async()=>{
    const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

  setUserData(response.data)
  console.log(response.data)
  }
  useEffect(function(){
    getData()
  },[index])


  let printUserData =<h3 className='text-gray-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>'Loading......'</h3>

  if(userData.length>0){
     printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
     })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white rounded-2xl'>
        <div className='flex flex-wrap gap-4 h-[80%] p-2'>
          {printUserData}
        </div>

        <div className='flex justify-centre gap-6 items-centre p-4'>
          <button style={{opacity: index == 1? 0.5 : 1}}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
               console.log('prev button clicked')
               if(index>1){
                setIndex(index-1)
                setUserData([])

              }
          }}
          >
            PREV
            </button>
            <h4>Page{index}</h4>
          <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
           onClick={()=>{
                console.log('next button clicked')
                setIndex(index+1)
                setUserData([])
          }}
          >
            Next
            </button>
        </div>
    </div>
  )
}

export default App