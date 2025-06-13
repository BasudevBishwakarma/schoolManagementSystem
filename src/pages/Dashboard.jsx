import React from "react";
import CustomColumnChart from "../components/charts/CustomColumnChart";
import CustomPieChart from "../components/charts/CustomPieChart";

const cards = [
  {
    title: "Total Students",
    value: "1,234",
    icon: "🎓",
    bg: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    title: "Total Teachers",
    value: "87",
    icon: "👩‍🏫",
    bg: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    title: "Attendance Rate Today",
    value: "92%",
    icon: "📅",
    bg: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
];

const feeCollectionData = [
  { month: "Jan", amount: 12000, type: "Tuition" },
  { month: "Jan", amount: 3000, type: "Transport" },
  { month: "Feb", amount: 15000, type: "Tuition" },
  { month: "Feb", amount: 4000, type: "Transport" },
  { month: "Mar", amount: 14000, type: "Tuition" },
  { month: "Mar", amount: 3500, type: "Transport" },
  { month: "Apr", amount: 16000, type: "Tuition" },
  { month: "Apr", amount: 4200, type: "Transport" },
  { month: "May", amount: 15500, type: "Tuition" },
  { month: "May", amount: 3900, type: "Transport" },
  { month: "Jun", amount: 13000, type: "Tuition" },
  { month: "Jun", amount: 3700, type: "Transport" },
];

const studentDistributionData = [
  { grade: "Grade 1", percentage: 20 },
  { grade: "Grade 2", percentage: 15 },
  { grade: "Grade 3", percentage: 18 },
  { grade: "Grade 4", percentage: 12 },
  { grade: "Grade 5", percentage: 10 },
  { grade: "Grade 6", percentage: 8 },
  { grade: "Grade 7", percentage: 9 },
  { grade: "Grade 8", percentage: 8 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex flex-wrap gap-[36px]">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`flex-1 min-w-[250px] max-w-sm p-[24px] rounded-2xl shadow-sm ${card.bg} ${card.textColor} flex items-center justify-between`}
          >
            <div>
              <h4 className="text-[20px] font-[600]">{card.title}</h4>
              <p className="text-[36px] font-[700] mt-2">{card.value}</p>
            </div>
            <div className="text-[46px]">{card.icon}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-[36px] w-full">
        <div className="p-4 bg-white rounded-xl shadow w-[60%]">
          <h2 className="text-lg font-semibold mb-4">Monthly Fee Collection</h2>
          <CustomColumnChart
            data={feeCollectionData}
            xField="month"
            yField="amount"
            colorField="type"
          />
        </div>
        <div className="p-4 bg-white rounded-xl shadow w-[38%]">
          <h2 className="text-lg font-semibold mb-4">
            Student Distribution by Grade
          </h2>
          <CustomPieChart
            data={studentDistributionData}
            angleField="percentage"
            colorField="grade"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
