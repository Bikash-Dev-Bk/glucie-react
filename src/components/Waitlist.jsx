import waitlistImage from "../assets/images/waitlist.png"


const Waitlist = () => {
  return (
    <div className="bg-cover bg-center lg:h-[720px] flex items-center justify-center lg:bg-waitlist p-5 lg:p-0">
      <div className="lg:bg-white lg:w-[40%] lg:mx-auto lg:p-10 lg:rounded-xl">
        <h2 className="text-3xl md:text-5xl text-center font-semibold mb-5">
          Join The Waitlist
        </h2>
        <p className="text-center text-base md:text-lg">
          We’re only able to accept users on a rollling basis due to demand and
          resources. We’d love you
        </p>
        <img
          src={waitlistImage}
          alt=""
          className="rounded-xl lg:rounded-none lg:hidden my-5"
        />
        <div>
          <input
            type="text"
            placeholder="First Name"
            name=""
            id=""
            className="border-2 p-2 w-full lg:w-[49%] bg-[#EEEEEE] rounded-xl mt-5 lg:mr-2"
          />
          <input
            type="text"
            placeholder="First Name"
            name=""
            id=""
            className="border-2 p-2 w-full lg:w-[48%] bg-[#EEEEEE] rounded-xl mt-5"
          />
          <input
            type="text"
            placeholder="Email"
            name=""
            id=""
            className="border-2 p-2 w-full bg-[#EEEEEE] rounded-xl mt-5"
          />
          <select className="text-[#888888] border-2 p-2 w-full bg-[#EEEEEE] rounded-xl mt-5">
            <option value="">What Goal Do You Hope?</option>
            <option value="">Example 1</option>
            <option value="">Example 2</option>
            <option value="">Example 3</option>
          </select>

          <input
            type="submit"
            value="Submit"
            className="text-base md:text-lg text-white border-2 border-[#2251D4FF] bg-[#2251D4FF] hover:bg-white hover:text-[#2251D4FF] px-8 py-3 w-full rounded-full mt-5 md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
