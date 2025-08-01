
import { propertyData } from "@/app/types/property/propertyData";
import { NextResponse } from "next/server";

const property: propertyData[] = [
  // Appartment
  {
    id: '1',
    property_img: "/images/properties/prop-1.jpg",
    property_title: "Modern Appartment",
    property_price: "$150,000",
    category: "apartment",
    category_img: "/images/property_option/apartment.svg",
    rooms: 2,
    bathrooms: 1,
    location: "California",
    livingArea: "85m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "Apartment",
    beds: 2,
    garages: 0,
    region: "south",
    name: "Property 1",
    slug: "modern-apartment"
  },
  {
    id: '2',
    property_img: "/images/properties/prop-2.jpg",
    property_title: "City Appartment",
    property_price: "$180,000",
    category: "apartment",
    category_img: "/images/property_option/apartment.svg",
    rooms: 3,
    bathrooms: 2,
    location: "Texas",
    livingArea: "110m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Apartment",
    beds: 3,
    garages: 1,
    region: "north",
    name: "Property 2",
    slug: "city-apartment"
  },
  {
    id: '3',
    property_img: "/images/properties/prop-3.jpg",
    property_title: "Luxury Appartment",
    property_price: "$220,000",
    category: "apartment",
    category_img: "/images/property_option/apartment.svg",
    rooms: 4,
    bathrooms: 3,
    location: "New York",
    livingArea: "140m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "Apartment",
    beds: 4,
    garages: 1,
    region: "east",
    name: "Property 3",
    slug: "luxury-apartment"
  },

  // Villa
  {
    id: '4',
    property_img: "/images/properties/prop-4.jpg",
    property_title: "Mithra Villa",
    property_price: "$200,000",
    category: "villa",
    category_img: "/images/property_option/villa.svg",
    rooms: 3,
    bathrooms: 2,
    location: "Florida",
    livingArea: "190m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "House",
    beds: 3,
    garages: 1,
    region: "north",
    name: "Property 4",
    slug: "mithra-villa"
  },
  {
    id: '5',
    property_img: "/images/properties/prop-5.jpg",
    property_title: "Palm Villa",
    property_price: "$250,000",
    category: "villa",
    category_img: "/images/property_option/villa.svg",
    rooms: 4,
    bathrooms: 3,
    location: "Illinois",
    livingArea: "210m²",
    tag: "Sell",
    check: false,
    status: "Buy",
    type: "House",
    beds: 4,
    garages: 2,
    region: "west",
    name: "Property 5",
    slug: "palm-villa"
  },
  {
    id: '6',
    property_img: "/images/properties/prop-6.jpg",
    property_title: "Sunset Villa",
    property_price: "$275,000",
    category: "villa",
    category_img: "/images/property_option/villa.svg",
    rooms: 5,
    bathrooms: 4,
    location: "California",
    livingArea: "250m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "House",
    beds: 5,
    garages: 2,
    region: "south",
    name: "Property 6",
    slug: "sunset-villa"
  },

  // Office
  {
    id: '7',
    property_img: "/images/properties/prop-7.jpg",
    property_title: "Downtown Office",
    property_price: "$320,000",
    category: "office",
    category_img: "/images/property_option/office.svg",
    rooms: 6,
    bathrooms: 2,
    location: "Texas",
    livingArea: "300m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 2,
    garages: 2,
    region: "central",
    name: "Property 7",
    slug: "downtown-office"
  },
  {
    id: '8',
    property_img: "/images/properties/prop-8.jpg",
    property_title: "IT Office Space",
    property_price: "$400,000",
    category: "office",
    category_img: "/images/property_option/office.svg",
    rooms: 10,
    bathrooms: 4,
    location: "New York",
    livingArea: "500m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 2,
    garages: 4,
    region: "north",
    name: "Property 8",
    slug: "it-office-space"
  },
  {
    id: '9',
    property_img: "/images/properties/prop-9.jpg",
    property_title: "Startup Hub",
    property_price: "$350,000",
    category: "office",
    category_img: "/images/property_option/office.svg",
    rooms: 8,
    bathrooms: 3,
    location: "Florida",
    livingArea: "420m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 1,
    garages: 3,
    region: "east",
    name: "Property 9",
    slug: "startup-hub"
  },

  // Shop
  {
    id: '10',
    property_img: "/images/properties/prop-10.jpg",
    property_title: "Retail Shop",
    property_price: "$120,000",
    category: "shop",
    category_img: "/images/property_option/shop.svg",
    rooms: 2,
    bathrooms: 1,
    location: "Illinois",
    livingArea: "60m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 1,
    garages: 0,
    region: "west",
    name: "Property 10",
    slug: "retail-shop"
  },
  {
    id: '11',
    property_img: "/images/properties/prop-11.jpg",
    property_title: "Corner Store",
    property_price: "$140,000",
    category: "shop",
    category_img: "/images/property_option/shop.svg",
    rooms: 3,
    bathrooms: 1,
    location: "California",
    livingArea: "75m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 3,
    garages: 1,
    region: "south",
    name: "Property 11",
    slug: "corner-store"
  },
  {
    id: '12',
    property_img: "/images/properties/prop-12.jpg",
    property_title: "Shopping Unit",
    property_price: "$160,000",
    category: "shop",
    category_img: "/images/property_option/shop.svg",
    rooms: 4,
    bathrooms: 1,
    location: "Texas",
    livingArea: "90m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 1,
    garages: 1,
    region: "east",
    name: "Property 12",
    slug: "shopping-unit"
  },

  // House
  {
    id: '13',
    property_img: "/images/properties/prop-13.jpg",
    property_title: "Classic House",
    property_price: "$180,000",
    category: "house",
    category_img: "/images/property_option/house.svg",
    rooms: 4,
    bathrooms: 2,
    location: "New York",
    livingArea: "160m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "House",
    beds: 4,
    garages: 1,
    region: "north",
    name: "Property 13",
    slug: "classic-house"
  },
  {
    id: '14',
    property_img: "/images/properties/prop-14.jpg",
    property_title: "Family House",
    property_price: "$190,000",
    category: "house",
    category_img: "/images/property_option/house.svg",
    rooms: 5,
    bathrooms: 3,
    location: "Florida",
    livingArea: "180m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "House",
    beds: 5,
    garages: 1,
    region: "west",
    name: "Property 14",
    slug: "family-house"
  },
  {
    id: '15',
    property_img: "/images/properties/prop-15.jpg",
    property_title: "Compact House",
    property_price: "$160,000",
    category: "house",
    category_img: "/images/property_option/house.svg",
    rooms: 3,
    bathrooms: 2,
    location: "Illinois",
    livingArea: "120m²",
    tag: "Sell",
    check: true,
    status: "Buy",
    type: "House",
    beds: 3,
    garages: 1,
    region: "south",
    name: "Property 15",
    slug: "compact-house"
  },

  // Warehouse
  {
    id: '16',
    property_img: "/images/properties/prop-16.jpg",
    property_title: "Industrial Warehouse",
    property_price: "$500,000",
    category: "warehouse",
    category_img: "/images/property_option/warehouse.svg",
    rooms: 2,
    bathrooms: 1,
    location: "California",
    livingArea: "1000m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 2,
    garages: 2,
    region: "central",
    name: "Property 16",
    slug: "industrial-warehouse"
  },
  {
    id: '17',
    property_img: "/images/properties/prop-17.jpg",
    property_title: "Storage Unit",
    property_price: "$450,000",
    category: "warehouse",
    category_img: "/images/property_option/warehouse.svg",
    rooms: 1,
    bathrooms: 1,
    location: "Texas",
    livingArea: "800m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 4,
    garages: 1,
    region: "north",
    name: "Property 17",
    slug: "storage-unit"
  },
  {
    id: '18',
    property_img: "/images/properties/prop-18.jpg",
    property_title: "Logistics Hub",
    property_price: "$600,000",
    category: "warehouse",
    category_img: "/images/property_option/warehouse.svg",
    rooms: 3,
    bathrooms: 2,
    location: "New York",
    livingArea: "1200m²",
    tag: "Buy",
    check: true,
    status: "Buy",
    type: "Commercial",
    beds: 5,
    garages: 3,
    region: "east",
    name: "Property 18",
    slug: "logistics-hub"
  }
];

export async function GET() {
  return NextResponse.json(property);
}
