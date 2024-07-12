

const Prospect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="m-[20px] h-[80vh] w-[450px] shadow-lg">

                <h2 className="font-semibold m-[30px]">Prospect</h2>

                <ul className="m-[30px]">

                    <li className="mt-[10px]">
                        <strong className="font-semibold">Name:</strong> James Kruger
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Address:</strong> 123 Main St, Anytown
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Tel:</strong>+123 456 890
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Blood Type:</strong> AB+
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Diseases:</strong> None
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Date:</strong> 12/07/2024
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Weight:</strong> 55kg
                    </li>
                    <li className="mt-[10px]">
                        <strong className="font-semibold">Status:</strong> Pending
                    </li>
                </ul>

                <span className="block m-[10px]">Do you want to approve James to a donor?</span>
                <button className="bg-red-400 text-white cursor-pointer p-[5px] w-[150px] m-[10px]">Approve</button>
        </div>


    </div>
  )
}

export default Prospect