import img from "../assets/Raju_pass.jpg";

const Profile = () => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-100 py-8">
      <div className="relative w-[30%] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full bg-blue-500 h-40 flex justify-center items-end relative">

          <img
            src={img}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md absolute transform -translate-y-1/2 top-[102%]"
          />
        </div>
        
        <div className="w-full bg-gray-800 text-white flex flex-col items-center justify-center p-4 pt-16">
          <h1 className="text-2xl font-bold mb-1">
            Raju Kumar <span className="text-sm text-gray-400">22</span>
          </h1>
          <p className="text-sm mb-4 text-gray-300">New Delhi</p>
          <hr className="w-full border-gray-600 mb-4" />
          <div className="grid grid-cols-3 gap-14 text-center">
            <div>
              <h4 className="text-lg font-semibold">80K</h4>
              <p className="text-sm text-gray-400">Followers</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">803K</h4>
              <p className="text-sm text-gray-400">Likes</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">1.4K</h4>
              <p className="text-sm text-gray-400">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
