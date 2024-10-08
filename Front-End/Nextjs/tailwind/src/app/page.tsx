// text-colorname-degree => text color
// bg-colorname-degree => background
// border-colorname-degree => border color name
// border-2, border-4,border-8 so on => width 
// text-5xs => size =5*xs
// lg:text-5xl when screen lg it will execute 5xl
// m-number margin for all side


// mr-number for right side only
export default function Home() {
  return (
    <div>
      <h1 className="bg-white text-fuchsia-950 border-y-8 border-cyan-950  lg:text-6xl sm:text-3xs md:text-5xl" >Home Page</h1>
      <h2 className="bg-blackblue-900 text-blackblue-100 border-y-8 border-red-700 text-base italic">nav bar</h2>
      <h2 className="bg-blackblue-900 text-blackblue-100 border-y-8 border-red-700 mr-12 text-lg">nav-2 bar</h2>
      <p className="underline decoration-red-900  font-Edu text-3xl pt-2"> nav-3</p>
      <p className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque ea tempora earum accusamus cupiditate voluptatem, beatae veniam neque placeat omnis iste hic provident similique fugiat! Atque, distinctio. Sunt, corrupti.</p>
      <p className="bg-pink-700 text-white text-xl p-1">Padding</p>
      <p className="bg-pink-700 text-white text-xl m-1">marging</p>{/*my-1,mx-3,-mb-8 nrgative*/}
      <div className="w-auto h-20 bg-green-700 ">
        <div className="bg-red-600 w-2/5 h-1/2 ">Div1</div>{/*min-h-screen take all screen*/}
      </div>
      <div className="flex flex-row space-x-5 sm:flex-col">{/**sm: mean small and above */}
        <p className="grow bg-red-500">P1</p>
        <p>P2</p>
      </div>
      <div className="flex flex-row space-x-5">
        <p className="w-1/5 bg-red-500 shrink">P1</p>
        <p>P2</p>
      </div>
      <div className="lg:columns-2">
        <img src='https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?rs=1&pid=ImgDetMain'alt='hotal image' className="w-96"/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae accusantium quos voluptas! A similique vero, numquam architecto, maxime laborum sequi totam mollitia alias nostrum in fugit quaerat dolorum quod.Lorm Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae accusantium quos voluptas! A similique vero, numquam architecto, maxime laborum sequi totam mollitia alias nostrum in fugit quaerat dolorum quod.Lorm</p>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <div className="bg-red-500 col-span-2">Div1</div>
        <div className="bg-red-600 row-span-2 text-center">Div2</div>
        <div className="bg-red-800">Div3</div>
        <div className="bg-red-900">Div3</div>
        <div className="bg-red-200">Div4</div>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div className="bg-red-500  w-24">Div1</div>
        <div className="bg-red-600  w-24 text-center">Div2</div>
        <div className="bg-red-800  w-24">Div3</div>
        <div className="bg-red-900 w-96">Div3</div>
      </div>
      <div className="bg-[#94A3B8] w-96  container mx-auto my-10 relative overflow-x-auto flex space-x-40">
      <img src='https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?rs=1&pid=ImgDetMain'alt='hotal image' className="w-20 rounded-2xl "/>
      <img src='https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?rs=1&pid=ImgDetMain'alt='hotal image' className="w-20 rounded-2xl "/>
      <img src='https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?rs=1&pid=ImgDetMain'alt='hotal image' className="w-20 rounded-2xl "/>
      </div>
      <div className="container">
       <h1 className="text-3xl font-Edu font-bold italic">Header1</h1>
       <h1>Header2</h1>
       <h1>Header3</h1>
       <h1>Header4</h1>
       <h1>Header4</h1>
      </div>
    </div>
  );
}

