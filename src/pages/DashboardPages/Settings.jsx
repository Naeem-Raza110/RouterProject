import Button from "../../components/Ui/Button";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-2">App Settings</h1>
        <p className="text-gray-500 mb-10">Configure your dashboard preferences and interface.</p>

        <div className="grid grid-cols-1 gap-4">
          {/* Demo Toggles */}
          {[
            { title: "Dark Mode", desc: "Toggle between light and dark themes", icon: "🌙" },
            { title: "Push Notifications", desc: "Receive alerts on your desktop", icon: "🔔" },
            { title: "Public Discovery", desc: "Allow others to see your profile", icon: "🌍" },
            { title: "Auto Updates", desc: "Keep the app updated in background", icon: "🔄" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
              <div className="w-14 h-7 bg-gray-200 rounded-full flex items-center px-1">
                <div className="h-5 w-5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          ))}

          {/* Danger Zone Demo */}
          <div className="mt-10 p-8 border-2 border-dashed border-red-100 rounded-[2rem] bg-red-50/20">
            <h4 className="text-red-600 font-bold mb-2 uppercase text-sm tracking-widest">Danger Zone</h4>
            <p className="text-gray-500 text-sm mb-4">Deleting your account will remove all synced local data.</p>
            <Button className="px-6 py-2" isCorrect={false} title={"Delete Account"} onClick={() => alert("Account deletion is a demo action and does not actually delete anything.")} />
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;