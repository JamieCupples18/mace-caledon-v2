// Import necessary React components and functions from the react-router-dom library
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import the Home and Admin components statically
import Home from "./Pages/firstpage";
import Admin from "./Pages/Admin/admin";
import BasicInformation from "./Pages/Admin/AccountPage/Basicinfo/Basicinfo";
import EmploymentInformation from "./Pages/Admin/AccountPage/EmploymentInfo/EmploymentInfo";
import ClockInInformation from "./Pages/Admin/EmployeePage/ClockIn/ClockIn";
import Holidays from "./Pages/Admin/EmployeePage/Holidays/holidays";
import EmployeePerformanceReviews from "./Pages/Admin/EmployeePage/EmployeePerformance/EmployeePerformance";
import RTI from "./Pages/Admin/EmployeePage/RTI/rti";
import AddNewEmployee from "./Pages/Admin/EmployeePage/AddEmployee/AddEmployee";
import DeleteEmployee from "./Pages/Admin/EmployeePage/DeleteEmployee/deleteemployee";
import GenerateRota from "./Pages/Admin/EmployeePage/GenerateRota/generateRota";
import IncomeOverview from "./Pages/Admin/FinancePage/IncomeOverview/IncomeOverview";
import TransactionInsights from "./Pages/Admin/FinancePage/TransactionInsights/TransactionInsights";
import ProfitAndLoss from "./Pages/Admin/FinancePage/ProfitLoss/ProfitLoss";
import CustomerTransactions from "./Pages/Admin/FinancePage/CustomerTransactions/CustomerTransactions";
import ProductCosts from "./Pages/Admin/FinancePage/ProductCosts/ProductCosts";
import OperationalCosts from "./Pages/Admin/FinancePage/OperationalCosts/OperationalCosts";
import PlanningAndForecasting from "./Pages/Admin/FinancialPlanningPage/PlanningForecasting/PlanningForecasting";
import Tax from "./Pages/Admin/FinancialPlanningPage/Tax/Tax";
import SupplierManagement from "./Pages/Admin/FinancialPlanningPage/SupplierManagement/SupplierManagement";
import BenefitsAndCompliance from "./Pages/Admin/FinancialPlanningPage/BenefitsCompliance/BenefitsCompliance";
import SalesAndStock from "./Pages/Admin/InventoryMPage/SalesStock/SalesStock";
import StockOperations from "./Pages/Admin/InventoryMPage/StockOperations/StockOperations";
import StockScanning from "./Pages/Admin/ScannerOpPage/StockScanning/StockScanning";
import InventoryAdjustments from "./Pages/Admin/ScannerOpPage/InventoryAdjustments/InventoryAdjustments";

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
        <Route
          path="/admin/accounts/basicinformation/*"
          element={<BasicInformation />}
        />
        <Route
          path="/admin/accounts/employmentinformation/*"
          element={<EmploymentInformation />}
        />
        <Route
          path="/admin/employees/clockin/*"
          element={<ClockInInformation />}
        />
        <Route path="/admin/employees/holidays/*" element={<Holidays />} />
        <Route
          path="/admin/employees/employeeperformancereviews/*"
          element={<EmployeePerformanceReviews />}
        />
        <Route path="/admin/employees/rti/*" element={<RTI />} />
        <Route
          path="/admin/employees/addemployee/*"
          element={<AddNewEmployee />}
        />
        <Route
          path="/admin/employees/deleteemployee/*"
          element={<DeleteEmployee />}
        />
        <Route
          path="/admin/employees/generaterota/*"
          element={<GenerateRota />}
        />
        <Route
          path="/admin/finances/customertransactions/*"
          element={<CustomerTransactions />}
        />
        <Route
          path="/admin/finances/incomeoverview/*"
          element={<IncomeOverview />}
        />
        <Route
          path="/admin/finances/operationalcosts/*"
          element={<OperationalCosts />}
        />
        <Route
          path="/admin/finances/productcosts/*"
          element={<ProductCosts />}
        />
        <Route
          path="/admin/finances/profitloss/*"
          element={<ProfitAndLoss />}
        />
        <Route
          path="/admin/finances/transactioninsights/*"
          element={<TransactionInsights />}
        />
        <Route
          path="/admin/financialplanning/benefitscompliance/*"
          element={<BenefitsAndCompliance />}
        />
        <Route
          path="/admin/financialplanning/planningforecasting/*"
          element={<PlanningAndForecasting />}
        />
        <Route
          path="/admin/financialplanning/suppliermanagement/*"
          element={<SupplierManagement />}
        />
        <Route path="/admin/financialplanning/tax/*" element={<Tax />} />
        <Route
          path="/admin/inventorymanagement/salesstock/*"
          element={<SalesAndStock />}
        />
        <Route
          path="/admin/inventorymanagement/stockoperations/*"
          element={<StockOperations />}
        />
        <Route
          path="/admin/scanneroperations/inventoryadjustments/*"
          element={<InventoryAdjustments />}
        />
        <Route
          path="/admin/scanneroperations/stockscanning/*"
          element={<StockScanning />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
