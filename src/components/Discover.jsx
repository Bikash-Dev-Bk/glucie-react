const Discover = () => {
  return (
    <div className="bg-cover bg-center lg:h-[660px] flex items-center bg-discover  mb-16 lg:mb-44 py-8 lg:py-0">
      <div className="p-5 lg:pl-32 lg:w-[45%]">
        <h2 className="text-3xl md:text-5xl text-white font-semibold mb-5">
          Discover <br />
          Metabolic Health <br />
          With Glucie
        </h2>
        <p className="text-white mb-10">
          A personalized program based on your body’s unique reactions and
          scientific studies.
        </p>
        <button className="font-semibold text-black bg-[#F5FD00] border-2 border-[#F5FD00] hover:bg-transparent hover:text-[#F5FD00] px-5 lg:px-7 py-2 lg:py-3 rounded-full">
          Explore all product
        </button>
      </div>
    </div>
  );
};

export default Discover;
