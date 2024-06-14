"use client"


export default function DashboardHero() {
    return (
        <main className="flex-1 bg-gray-200 text-black h-screen overflow-y-auto">
        {/* Hero section */}
        <div className="p-4">
          <h1 className="text-3xl m-10 font-bold mb-4">Visual Analytics</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 m-10">
            {/* Card 1 */}
            <div className="card w-full md:w-80 h-72 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 1</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>
      
            {/* Card 2 */}
            <div className="card w-full md:w-80 h-72 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 2</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>
      
            {/* Card 3 */}
            <div className="card w-full md:w-80 h-72 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 3</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>
      
            {/* Card 4 */}
            <div className="card w-full md:w-80 h-72 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 4</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>


            <div className="card w-full md:w-80 h-72 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 4</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>

            <div className="card w-full md:w-80 h-72 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 4</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>
            
            {/* Add more cards as needed */}
          </div>
      
    





          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 m-10">
            {/* Custom sized card */}
            <div className="card w-full h-96 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Custom Card Title</h2>
               
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>
      
            {/* Regular card */}
            <div className="card w-full h-96 bg-slate-100 shadow-xl">
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">Card Title 5</h2>
                
                <div className="card-actions flex justify-end">
                  {/* Add actions as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } 