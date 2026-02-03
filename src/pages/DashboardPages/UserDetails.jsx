import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/Ui/Button";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // <-- FIXED URL
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500 animate-pulse">
        Loading user…
      </div>
    );
  }

  if (!user) {
    return <div className="p-10 text-center text-red-500">User not found</div>;
  }

  return (
    <div className="p-6  mx-auto min-h-screen bg-gray-50 text-gray-900">
      <Link
        to="/dashboard/users"
        className="text-blue-500 text-sm hover:underline mb-4 inline-block"
      >
        ← Back to Users
      </Link>

      <div className="bg-white p-8 rounded-2xl shadow-md mb-10 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-700">
            {user.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-500 text-sm">@{user.username}</p>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact</h2>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Website:</span> {user.website}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Address</h2>
          <div className="text-gray-700 text-sm space-y-2">
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Company</h2>
          <div className="text-gray-700 text-sm space-y-2">
            <p className="font-medium">{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Actions</h2>

          <Button title={"Message User"} className=" py-2 " />

          <Button title={"Remove User"} isCorrect={false} className="py-2 " />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
