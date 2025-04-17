import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">IPL Score Tracker</h3>
          <p className="text-sm text-gray-400">
            The ultimate destination for IPL cricket fans to stay updated with live scores,
            team standings, and match schedules.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/live-scores">Live Scores</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 mb-3 text-gray-300">
            <Link to="#"><Twitter size={20} /></Link>
            <Link to="#"><Facebook size={20} /></Link>
            <Link to="#"><Instagram size={20} /></Link>
            <Link to="#"><Youtube size={20} /></Link>
          </div>
          <p className="text-sm text-gray-400">Download our mobile app for a better experience</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
}
