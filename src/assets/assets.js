import logo from './logo.png';
import logo_dark from './logo_dark.svg';
import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';

import brand_img from './brand_img.jpg';
import project_img_1 from './project_img_1.png';
import project_img_2 from './project_img_2.png';
import project_img_3 from './project_img_3.png';
import project_img_4 from './project_img_4.png';
import project_img_5 from './project_img_5.png';
import project_img_6 from './project_img_6.png';
import project_img_7 from './project_img_7.png';
import project_img_8 from './project_img_8.png';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';
import Legal_Qr from './Legal_Qr.png';

// Exporting all assets for easy access in other parts of the app
export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  project_img_7,
  project_img_8,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  left_arrow,
  right_arrow,
  Legal_Qr,
};

// Projects data to be used wherever necessary in the app
export const projectsData = [
  {
    title: "Gymnasium",
    image: project_img_1
  },
  {
    title: "Swimming Pool",
    image: project_img_2
  },
  {
    title: "Pool Side Deck",
    image: project_img_3
  },
  {
    title: "Water fountain",
    image: project_img_4
  },
  {
    title: "Walking area",
    image: project_img_5
  },
  {
    title: "Seating area",
    image: project_img_6
  },
  {
    title: "Kid's play area",
    image: project_img_7
  },
  {
    title: "Landscaped garden",
    image: project_img_8
  },
  // If you need more, remove duplicates as per requirement.
];
export const SpaceData = [
  {
    title: "2 BHK Flat",
    image: project_img_1,
    brochure: "cross_icon",
  },
  {
    title: "3 BHK Flat",
    image: project_img_3,
    brochure: "path/to/office-brochure.pdf",
  }, 
   {
    title: "JODI Flat",
    image: project_img_2,
    brochure: "path/to/shop-brochure.pdf",
  },
  {
    title: "Shop",
    image: project_img_4,
    brochure: "path/to/plot-brochure.pdf",
  },
];


// Testimonials data to be displayed in your app
export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  }
];
 
