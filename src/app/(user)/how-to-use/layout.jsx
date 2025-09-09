const HowToUseLayout = ({ children }) => {
  return (
    <div className="w-full gap-4 md:grid-cols-4 grid grid-cols-1">
      {/* Main Content */}
      <main className="md:col-span-3" role="main">
        {children}
      </main>

      {/* Sidebar */}
      <aside
        className="md:col-span-1 rounded-lg"
        aria-label="Helpful Tips for Using the Portal"
      >
        <div className="sticky top-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Tips & Guidance
          </h2>
          <ul className="space-y-4">
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">
                📋 Prepare Documents
              </h3>
              <p className="text-sm text-gray-600">
                Keep your NIC and previous medical records ready before booking.
              </p>
            </li>
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">⏰ Time Slots</h3>
              <p className="text-sm text-gray-600">
                New doctor sessions are added daily. Check regularly for
                updates.
              </p>
            </li>
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">
                💳 Payment Options
              </h3>
              <p className="text-sm text-gray-600">
                Secure payments available via card, bank transfer, and mobile
                wallets.
              </p>
            </li>
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">
                📱 Mobile Friendly
              </h3>
              <p className="text-sm text-gray-600">
                Book appointments anytime, anywhere from your smartphone.
              </p>
            </li>
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">
                🧑‍⚕️ Specialist Doctors
              </h3>
              <p className="text-sm text-gray-600">
                Find specialists in cardiology, pediatrics, surgery, and more.
              </p>
            </li>
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">
                📞 Customer Support
              </h3>
              <p className="text-sm text-gray-600">
                Need help? Call our 24/7 support line for quick assistance.
              </p>
            </li>
            <li className="bg-slate-200 p-3 rounded-lg shadow-sm">
              <h3 className="font-medium text-blue-600 mb-1">
                🔒 Privacy & Security
              </h3>
              <p className="text-sm text-gray-600">
                Your medical data is encrypted and handled with strict privacy
                policies.
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default HowToUseLayout;
