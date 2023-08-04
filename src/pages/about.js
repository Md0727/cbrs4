import React from 'react'

const about = () => {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl max-[600px]:bg-sky-300">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://picsum.photos/id/237/200/300" alt="Modern building architecture" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Company retreats</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div>
     <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">{/* ... */}</svg>
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>

    </div>
  )
}

export default about