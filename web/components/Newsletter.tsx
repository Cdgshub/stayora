import React from "react";
export default function Newsletter() {
  return (
      <section className="py-24 bg-gradient-to-r from-blue-700 via-slate-900 to-blue-700 text-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold mb-4">
                              Stay Connected
                                      </p>
                                              <h2 className="text-5xl font-black mb-6">
                                                        Get Exclusive Travel Deals
                                                                </h2>
                                                                        <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-8 mb-12">
                                                                                  Join the Stayora community and receive luxury hotel offers,
                                                                                            exclusive member discounts, travel inspiration and special
                                                                                                      promotions directly in your inbox.
                                                                                                              </p>
                                                                                                                      <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                                                                                                                                <input
                                                                                                                                            type="email"
                                                                                                                                                        placeholder="Enter your email address"
                                                                                                                                                                    className="flex-1 rounded-xl p-5 text-slate-900 outline-none"
                                                                                                                                                                              />
                                                                                                                                                                                        <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-10 rounded-xl">
                                                                                                                                                                                                    Subscribe
                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                              <p className="text-sm text-slate-300 mt-6">
                                                                                                                                                                                                                                        No spam. Unsubscribe anytime.
                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                            }