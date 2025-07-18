export default function Particles() {
  return (
    <>
      {/* Circle 1 - Top Left */}
      <div className="absolute top-[20px] left-[20px] z-[-1] h-[300px] w-[300px] rounded-full bg-[#FF5200]/10 blur-3xl"></div>
      <div className="absolute top-[300px] left-[50%] z-[-1] h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#FF5200]/10 blur-3xl"></div>

      {/* Circle 2 - Bottom Right */}
      <div className="absolute right-[-100px] bottom-[-100px] z-[-1] h-[250px] w-[250px] rounded-full bg-[#FF7F42]/10 blur-2xl"></div>

      {/* Circle 3 - Top Right */}
      <div className="absolute top-[10px] right-[-12px] z-[-1] h-[200px] w-[200px] rounded-full bg-[#FFAF80]/10 blur-3xl"></div>

      {/* Circle 4 - Bottom Left */}
      <div className="absolute bottom-[-150px] left-[-100px] z-[-1] h-[350px] w-[350px] rounded-full bg-[#FFB685]/10 blur-xl"></div>

      {/* Circle 5 - Center Background */}
      <div className="absolute top-[50%] left-[50%] z-[-1] h-[400px] w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#FF5200]/10 opacity-40 blur-3xl"></div>

      {/* Circle 6 - Mid Right */}
      <div className="absolute top-[30%] right-[-120px] z-[-1] h-[250px] w-[250px] rounded-full bg-[#FFA366]/20 blur-2xl"></div>

      {/* Circle 7 - Mid Left */}
      <div className="absolute top-[40%] left-[-120px] z-[-1] h-[300px] w-[300px] rounded-full bg-[#FF5200]/15 blur-2xl"></div>

      {/* Circle 8 - Bottom Center */}
      <div className="absolute bottom-[-100px] left-[50%] z-[-1] h-[200px] w-[200px] translate-x-[-50%] rounded-full bg-[#FF8142]/20 blur-2xl"></div>
    </>
  );
}
