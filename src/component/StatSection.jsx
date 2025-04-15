import { motion } from "framer-motion";
import { Calendar, TrendingUp, Trophy, Users } from "lucide-react";

export default function StatSection() {
  const stats = [
    { icon: Users, title: "Total Matches", Value: "74" },
    { icon: Trophy, title: "Teams", Value: "10" },
    { icon: Calendar, title: "Tournament Duration", Value: "51 Days" },
    { icon: TrendingUp, title: "Highest Score", Value: "246/7" }
  ];

  return (
    <div className="py-16 bg-gradient-to-e from-blue-600 to-red-600">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          IPL 2025 Stats and Highlights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-lg">{item.Value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
