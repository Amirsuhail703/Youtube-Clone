import React from 'react'

function ListItem() {
    const categories = [
        "All","Music","React Routers","Computer Programming","Reverberation","Movie Musicals","News","Mixes","Telugu Cinema","Live",
        "Cricket","Football","JavaScript","React","Python","Chai Or Code","T-Series","New To You"
    ];

  return (
    <div className=' mt-2 flex hover:overflow-x-scroll hide-scroll-bar px-4'>
        <div className='flex space-x-3 flex-nowrap hide-scroll-bar'>
            {
                 categories.map((item,indx)=>{
                    return(<div key={indx} className='flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2'>{item}</div>)
                })
            }
           
        </div>
    </div>
  )
}

export default ListItem
  