import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const submenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (submenuRef.current) {
      setSubmenuHeight(submenuRef.current.clientHeight);
    }
  }, [activeMenu]);

  const handleMenuClick = (menuName, subMenuItem = null) => {
    console.log("handleMenuClick called:", menuName, subMenuItem);
    setActiveMenu(activeMenu === menuName ? null : menuName);

    // Use react-router-dom's navigate to change the route based on the menu and submenu clicked
    if (subMenuItem) {
      switch (menuName) {
        case "Account":
          if (subMenuItem === "Basic Information") {
            console.log("Navigating to /Basic-Information/*");
            navigate("/admin/accounts/basicinformation/*");
          } else if (subMenuItem === "Employment Information") {
            console.log("Navigating to /Employment-Information/*");
            navigate("/admin/accounts/employmentinformation/*");
          }
          break;

        case "Employees":
          if (subMenuItem === "Clock In Information") {
            console.log("Navigating to /Clock-In-Information/*");
            navigate("/admin/employees/clockin/*");
          } else if (subMenuItem === "Employee Performance Reviews") {
            console.log("Navigating to /Employee-Performance-Review/*");
            navigate("/admin/employees/employeeperformancereviews/*");
          } else if (subMenuItem === "Holidays") {
            console.log("Navigating to /holidays/*");
            navigate("/admin/employees/holidays/*");
          } else if (subMenuItem === "RTI") {
            console.log("Navigating to /RTI/*");
            navigate("/admin/employees/rti/*");
          } else if (subMenuItem === "Add Employee") {
            console.log("Navigating to /Add-Employee/*");
            navigate("/admin/employees/addemployee/*");
          } else if (subMenuItem === "Delete Employee") {
            console.log("Navigating to /Delete-Employee/*");
            navigate("/admin/employees/deleteemployee/*");
          } else if (subMenuItem === "Generate Rota") {
            console.log("Navigating to /Generate-Rota/*");
            navigate("/admin/employees/generaterota/*");
          }
          break;

        case "Finances":
          if (subMenuItem === "Income Overview") {
            console.log("Navigating to /Income-Overview/*");
            navigate("/admin/finances/incomeoverview/*");
          } else if (subMenuItem === "Transaction Insights") {
            console.log("Navigating to /Transaction-Insights /*");
            navigate("/admin/finances/transactioninsights/*");
          } else if (subMenuItem === "Profit and Loss") {
            console.log("Navigating to /Profit-and-loss/*");
            navigate("/admin/finances/profitloss/*");
          } else if (subMenuItem === "Customer Transactions") {
            console.log("Navigating to /Customer-Transactions/*");
            navigate("/admin/finances/customertransactions/*");
          } else if (subMenuItem === "Product Costs") {
            console.log("Navigating to /Product-Costs/*");
            navigate("/admin/finances/productcosts/*");
          } else if (subMenuItem === "Operational Costs") {
            console.log("Navigating to /Operational-Costs/*");
            navigate("/admin/finances/operationalcosts/*");
          }
          break;

        case "Financial Planning and Compliance":
          if (subMenuItem === "Planning and Forecasting") {
            console.log("Navigating to /Planning-and-Forecasting");
            navigate("/admin/financialplanning/planningforecasting/*");
          } else if (subMenuItem === "Tax") {
            console.log("Navigating to /Tax/*");
            navigate("/admin/financialplanning/tax/*");
          } else if (subMenuItem === "Supplier Management") {
            console.log("Navigating to /Supplier-Management/*");
            navigate("/admin/financialplanning/suppliermanagement/*");
          } else if (subMenuItem === "Benefits and Compliance") {
            console.log("Navigating to /Benefits-and-Compliance/*");
            navigate("/admin/financialplanning/benefitscompliance/*");
          }
          break;

        case "Inventory Management":
          if (subMenuItem === "Sales and Stock") {
            console.log("Navigating to /Sales-and-Stock/*");
            navigate("/admin/inventorymanagement/salesstock/*");
          } else if (subMenuItem === "Stock Operations") {
            console.log("Navigating to /Stock-Operations/*");
            navigate("/admin/inventorymanagement/stockoperations/*");
          }
          break;

        case "Scanner Operations":
          if (subMenuItem === "Stock Scanning") {
            console.log("Navigating to /Stock-Scanning/*");
            navigate("/admin/scanneroperations/stockscanning/*");
          } else if (subMenuItem === "Inventory Adjustments") {
            console.log("Navigating to /Inventory-Adjustments/*");
            navigate("/admin/scanneroperations/inventoryadjustments/*");
          }
          break;
        default:
          break;
      }
    }
  };

  // Function to navigate back to admin dashboard
  const navigateToAdminDashboard = () => {
    navigate("/admin/*");
  };

  const renderSubMenu = (subMenuItems, menuName) => {
    return (
      <div ref={submenuRef}>
        <ul style={subMenuStyle}>
          {subMenuItems.map((item) => (
            <li
              key={item}
              style={largerSubMenuItemStyle}
              onClick={() => handleMenuClick(menuName, item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <aside style={sidebarStyle}>
      <div style={logoStyle} onClick={navigateToAdminDashboard}>
        <h2 style={logoText}>Admin Dashboard</h2>
      </div>
      <nav>
        <ul style={listStyle}>
          <li style={menuItemStyle} onClick={() => handleMenuClick("Account")}>
            Account
            {activeMenu === "Account" && (
              <div style={subMenuContainerStyle}>
                {renderSubMenu(
                  ["Basic Information", "Employment Information"],
                  "Account"
                )}
              </div>
            )}
          </li>
          <li
            style={{
              ...menuItemStyle,
              marginTop:
                activeMenu === "Account" ? `${submenuHeight + 20}px` : "15px",
            }}
            onClick={() => handleMenuClick("Employees")}
          >
            {/* Placeholder */}
          </li>

          <li
            style={menuItemStyle}
            onClick={() => handleMenuClick("Employees")}
          >
            Employees
            {activeMenu === "Employees" && (
              <div style={subMenuContainerStyle}>
                {renderSubMenu(
                  [
                    "Clock In Information",
                    "Employee Performance Reviews",
                    "Holidays",
                    "RTI",
                    "Add Employee",
                    "Delete Employee",
                    "Generate Rota",
                  ],
                  "Employees"
                )}
              </div>
            )}
          </li>
          <li
            style={{
              ...menuItemStyle,
              marginTop:
                activeMenu === "Employees" ? `${submenuHeight + 20}px` : "15px",
            }}
            onClick={() => handleMenuClick("Finances")}
          >
            {/* Placeholder */}
          </li>

          <li style={menuItemStyle} onClick={() => handleMenuClick("Finances")}>
            Finances
            {activeMenu === "Finances" && (
              <div style={subMenuContainerStyle}>
                {renderSubMenu(
                  [
                    "Income Overview",
                    "Transaction Insights",
                    "Profit and Loss",
                    "Customer Transactions",
                    "Product Costs",
                    "Operational Costs",
                  ],
                  "Finances"
                )}
              </div>
            )}
          </li>
          <li
            style={{
              ...menuItemStyle,
              marginTop:
                activeMenu === "Finances" ? `${submenuHeight + 20}px` : "15px",
            }}
            onClick={() => handleMenuClick("Financial Planning and Compliance")}
          >
            {/* Placeholder */}
          </li>

          <li
            style={menuItemStyle}
            onClick={() => handleMenuClick("Financial Planning and Compliance")}
          >
            Financial Planning and Compliance
            {activeMenu === "Financial Planning and Compliance" && (
              <div style={subMenuContainerStyle}>
                {renderSubMenu(
                  [
                    "Planning and Forecasting",
                    "Tax",
                    "Supplier Management",
                    "Benefits and Compliance",
                  ],
                  "Financial Planning and Compliance"
                )}
              </div>
            )}
          </li>
          <li
            style={{
              ...menuItemStyle,
              marginTop:
                activeMenu === "Financial Planning and Compliance"
                  ? `${submenuHeight + 20}px`
                  : "15px",
            }}
            onClick={() => handleMenuClick("Inventory Management")}
          >
            {/* Placeholder */}
          </li>

          <li
            style={menuItemStyle}
            onClick={() => handleMenuClick("Inventory Management")}
          >
            Inventory Management
            {activeMenu === "Inventory Management" && (
              <div style={subMenuContainerStyle}>
                {renderSubMenu(
                  ["Sales and Stock", "Stock Operations"],
                  "Inventory Management"
                )}
              </div>
            )}
          </li>
          <li
            style={{
              ...menuItemStyle,
              marginTop:
                activeMenu === "Inventory Management"
                  ? `${submenuHeight + 20}px`
                  : "15px",
            }}
            onClick={() => handleMenuClick("Scanner Operations")}
          >
            {/* Placeholder */}
          </li>

          <li
            style={{
              ...menuItemStyle,
              marginTop: activeMenu === "Scanner Operations",
            }}
            onClick={() => handleMenuClick("Scanner Operations")}
          >
            Scanner Operations
            {activeMenu === "Scanner Operations" && (
              <div style={subMenuContainerStyle}>
                {renderSubMenu(
                  ["Stock Scanning", "Inventory Adjustments"],
                  "Scanner Operations"
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

const sidebarStyle = {
  width: "240px",
  background: "#ffffff",
  color: "#000000",
  padding: "20px",
  height: "120vh", // Use viewport height (100vh) for a fixed height
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  marginBottom: "20px",
};

const logoStyle = {
  marginBottom: "0px",
  textAlign: "center",
};

const logoText = {
  fontSize: "1.5em",
  fontWeight: "bold",
  paddingBottom: "20px",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
  overflowY: "auto",
  height: "70vh",
  scrollbarWidth: "thin", // Firefox
  WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS devices
  "&::WebkitScrollbar": {
    width: "0px",
  },
  "&::WebkitScrollbarThumb": {
    backgroundColor: "#34495e",
    borderRadius: "0px",
  },
};

const menuItemStyle = {
  marginBottom: "15px",
  cursor: "pointer",
  padding: "5px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  position: "relative", // Added position relative
  transition: "background 0.3s ease",
  fontSize: "20px",
  fontFamily: "math",
  textAlign: "center",
  justifyContent: "center",
};

const subMenuContainerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#949494",
  borderRadius: "0 0 8px 8px",
  zIndex: 1,
  textAlign: "center",
};

const subMenuStyle = {
  listStyleType: "none",
  padding: "10px",
  paddingLeft: "30px",
  paddingRight: "30px",
  margin: "0",
  height: "auto",
};

const largerSubMenuItemStyle = {
  marginBottom: "10px",
  cursor: "pointer",
  padding: "12px", // Adjust the padding to make the sub-menu items larger
  borderRadius: "5px",
  transition: "background 0.3s ease",
  fontSize: "16px",
  textAlign: "center",
};

export default Sidebar;
