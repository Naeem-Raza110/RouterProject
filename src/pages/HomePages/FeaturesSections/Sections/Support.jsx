import React from 'react'

function Support() {
    return (
        <section id="support" className="py-24 px-6 relative z-10">
            <h3 className="text-3xl font-semibold text-center mb-12">Support & Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
                    <h4 className="text-2xl font-semibold mb-3">Documentation</h4>
                    <p className="text-gray-300">Comprehensive guides for all features.</p>
                </div>

                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
                    <h4 className="text-2xl font-semibold mb-3">Community Forums</h4>
                    <p className="text-gray-300">Join discussions and get help from other users.</p>
                </div>

                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
                    <h4 className="text-2xl font-semibold mb-3">Live Chat</h4>
                    <p className="text-gray-300">Quick support directly from our team.</p>
                </div>
            </div>
        </section>
    )
}

export default Support