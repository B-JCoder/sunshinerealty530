import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  {
    label: "Properties",
    href: "#",
    submenu: [
      { label: "Property List", href: "/properties/properties-list" },
      { label: "Property Details", href: "/properties/properties-list/modern-apartment" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};

