import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeaturedHotels from "../components/FeaturedHotels";
import Destinations from "../components/Destinations";
import WhyChoose from "../components/WhyChoose";
import TravelServices from "../components/TravelServices";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
export default function Home() {
  return (
      <>
            <Navbar />
                  <main className="bg-white">
                          <Hero />
                                  <SearchBar />
                                          <FeaturedHotels />
                                                  <Destinations />
                                                          <WhyChoose />
                                                                  <TravelServices />
                                                                          <Testimonials />
                                                                                  <Newsletter />
                                                                                        </main>
                                                                                              <Footer />
                                                                                                  </>
                                                                                                    );
                                                                                                    }