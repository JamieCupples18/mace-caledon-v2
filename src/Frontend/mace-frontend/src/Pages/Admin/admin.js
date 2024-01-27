import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BasicInformation from "./AccountPage/Basicinfo/Basicinfo"; // Replace with your actual AdminDashboard component
import EmploymentInformation from "./AccountPage/EmploymentInfo/EmploymentInfo";
import ClockInInformation from "./EmployeePage/ClockIn/ClockIn";
import EmployeePerformanceReviews from "./EmployeePage/EmployeePerformance/EmployeePerformance";
import RTI from "./EmployeePage/RTI/rti";
import AddNewEmployee from "./EmployeePage/AddEmployee/AddEmployee";
import DeleteEmployee from "./EmployeePage/DeleteEmployee/deleteemployee";
import GenerateRota from "./EmployeePage/GenerateRota/generateRota";
import IncomeOverview from "./FinancePage/IncomeOverview/IncomeOverview";
import TransactionInsights from "./FinancePage/TransactionInsights/TransactionInsights";
import ProfitAndLoss from "./FinancePage/ProfitLoss/ProfitLoss";
import CustomerTransactions from "./FinancePage/CustomerTransactions/CustomerTransactions";
import ProductCosts from "./FinancePage/ProductCosts/ProductCosts";
import OperationalCosts from "./FinancePage/OperationalCosts/OperationalCosts";
import PlanningAndForecasting from "./FinancialPlanningPage/PlanningForecasting/PlanningForecasting";
import Tax from "./FinancialPlanningPage/Tax/Tax";
import SupplierManagement from "./FinancialPlanningPage/SupplierManagement/SupplierManagement";
import BenefitsAndCompliance from "./FinancialPlanningPage/BenefitsCompliance/BenefitsCompliance";
import SalesAndStock from "./InventoryMPage/SalesStock/SalesStock";
import StockOperations from "./InventoryMPage/StockOperations/StockOperations";
import StockScanning from "./ScannerOpPage/StockScanning/StockScanning";
import InventoryAdjustments from "./ScannerOpPage/InventoryAdjustments/InventoryAdjustments";

const Admin = () => {
  return (
    <div style={contentStyle}>
      <Header />
      <div style={containerStyle}>
        <Sidebar />
        <Routes>
          <Route path="/Basic-Information/*" element={<BasicInformation />} />
          <Route
            path="/Employment-Information/*"
            element={<EmploymentInformation />}
          />
          <Route
            path="/Clock-In-Performance/*"
            element={<ClockInInformation />}
          />
          <Route
            path="/Employee-Performance-Review/*"
            element={<EmployeePerformanceReviews />}
          />
          <Route path="/RTI/*" element={<RTI />} />
          <Route path="/Add-New-Employee/*" element={<AddNewEmployee />} />
          <Route path="/Delete-Employee/*" element={<DeleteEmployee />} />
          <Route path="/Generate-Rota/*" element={<GenerateRota />} />

          <Route path="/Income-Overview/*" element={<IncomeOverview />} />
          <Route
            path="/Transaction-Insights/*"
            element={<TransactionInsights />}
          />
          <Route path="/Profit-and-Loss/*" element={<ProfitAndLoss />} />
          <Route
            path="/Customer-Transactions/*"
            element={<CustomerTransactions />}
          />
          <Route path="/Product-Costs/*" element={<ProductCosts />} />
          <Route path="/Operational-Costs/*" element={<OperationalCosts />} />
          <Route
            path="/Planning-and-Forecasting/*"
            element={<PlanningAndForecasting />}
          />
          <Route path="/Tax/*" element={<Tax />} />
          <Route
            path="/Supplier-Management/*"
            element={<SupplierManagement />}
          />
          <Route
            path="/Benefits-and-Compliance/*"
            element={<BenefitsAndCompliance />}
          />
          <Route path="/Sales-and-Stock/*" element={<SalesAndStock />} />
          <Route path="/Stock-Operations/*" element={<StockOperations />} />
          <Route path="/Stock-Scanning/*" element={<StockScanning />} />
          <Route
            path="/Inventory-Adjustments/*"
            element={<InventoryAdjustments />}
          />

          {/* Add more routes for other Admin pages as needed */}
        </Routes>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
};

const contentStyle = {
  marginLeft: "0px", // Adjust based on the width of your sidebar
  padding: "0px",
};

export default Admin;
