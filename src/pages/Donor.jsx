const Donor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold">Donor</h2>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="James Kruger"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Michigan, USA"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Tel</label>
          <input
            type="text"
            placeholder="+234 783 678"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Blood Group</label>
          <input
            type="text"
            placeholder="AB+"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="jameskruger@gmail.com"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>

      </div>

      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg">

      <div className="flex flex-col my-[12px]">
          <label htmlFor="">Weight</label>
          <input
            type="text"
            placeholder="55kg"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder="James Kruger"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Diseases</label>
          <input
            type="text"
            placeholder="Hypertension"
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>

        <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px]">Update</button>
      </div>
    </div>
  );
};

export default Donor;
