// Import necessary React components and functions from the react-router-dom library
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import the Home and Admin components statically
import Home from "./Pages/firstpage";
import Admin from "./Pages/Admin/admin";

// Configuration object to map each admin page name to its import path
const adminPagesConfig = {
  Admin: "./Pages/Admin/Admin/Admin",
  BasicInformation: "./Pages/Admin/AccountPage/Basicinfo/Basicinfo",
  EmploymentInformation:
    "./Pages/Admin/AccountPage/EmploymentInfo/EmploymentInfo",
  ClockInInformation: "./Pages/Admin/EmployeePage/ClockIn/ClockIn",
  EmployeePerformanceReviews:
    "./Pages/Admin/EmployeePage/EmployeePerformance/EmployeePerformance",
  RTI: "./Pages/Admin/EmployeePage/RTI/rti",
  AddNewEmployee: "./Pages/Admin/EmployeePage/AddEmployee/AddEmployee",
  DeleteEmployee: "./Pages/Admin/EmployeePage/DeleteEmployee/deleteemployee",
  GenerateRota: "./Pages/Admin/EmployeePage/GenerateRota/generateRota",
  IncomeOverview: "./Pages/Admin/FinancePage/IncomeOverview/IncomeOverview",
  TransactionInsights:
    "./Pages/Admin/FinancePage/TransactionInsights/TransactionInsights",
  ProfitAndLoss: "./Pages/Admin/FinancePage/ProfitLoss/ProfitLoss",
  CustomerTransactions:
    "./Pages/Admin/FinancePage/CustomerTransactions/CustomerTransactions",
  ProductCosts: "./Pages/Admin/FinancePage/ProductCosts/ProductCosts",
  OperationalCosts:
    "./Pages/Admin/FinancePage/OperationalCosts/OperationalCosts",
  PlanningAndForecasting:
    "./Pages/Admin/FinancialPlanningPage/PlanningForecasting/PlanningForecasting",
  Tax: "./Pages/Admin/FinancialPlanningPage/Tax/Tax",
  SupplierManagement:
    "./Pages/Admin/FinancialPlanningPage/SupplierManagement/SupplierManagement",
  BenefitsAndCompliance:
    "./Pages/Admin/FinancialPlanningPage/BenefitsCompliance/BenefitsCompliance",
  SalesAndStock: "./Pages/Admin/InventoryMPage/SalesStock/SalesStock",
  StockOperations:
    "./Pages/Admin/InventoryMPage/StockOperations/StockOperations",
  StockScanning: "./Pages/Admin/ScannerOpPage/StockScanning/StockScanning",
  InventoryAdjustments:
    "./Pages/Admin/ScannerOpPage/InventoryAdjustments/InventoryAdjustments",
};

// Main component of the application
function App() {
  return (
    // Use BrowserRouter to provide navigation context for the Routes
    <BrowserRouter>
      {/* Define the route structure using the Routes component */}
      <Routes>
        {/* Static import for the home page */}
        <Route path="/*" element={<Home />} />

        {/* Static import for the admin page */}
        <Route path="/admin/*" element={<Admin />} />

        {/* Dynamic route generation for admin pages */}
        {Object.entries(adminPagesConfig).map(([page, importPath]) => (
          <Route
            key={page}
            // Dynamically generate route paths based on page names
            path={`/admin/${page.toLowerCase().replace(/ /g, "-")}/*`}
            // Use React.createElement and React.lazy for dynamic component import
            element={React.createElement(React.lazy(() => import(importPath)))}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
