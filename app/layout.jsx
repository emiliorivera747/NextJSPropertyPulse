import React from "react";
import "../assets/styles/global.scss"; // Path: property-pulse


//Change the label for the tab
export const metadata ={
    title: 'PropertyPulse | Find The Perfect Rental',
    descrtiption: "Find the perfect rental property with PropertyPulse. Search for apartments, houses, condos, and more. Filter by location, price, and more.",
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
