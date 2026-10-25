import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './1000233826.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'SmartClear X',
    description: 'Multi-role mobile app that digitises university clearance for students, department officers, bursary, library and admin, replacing a slow paper process. Includes an AI layer for document validation and status prediction.',
    image: '/projects/smartclear-screenshot.png',
    logo: null,  // optional logo, e.g. '/projects/smartclear-logo.png'
    icon: 'ShieldCheck', // shown when there is no image or logo
    tech: ['React Native', 'Expo', 'TypeScript', 'AI/LLM'],
    category: 'Mobile App',
    client: 'University of Calabar (commissioned by a staff member)',
    status: 'MVP'
  },
  {
    title: 'Smart Exam Ecosystem',
    description: 'Examination-management platform covering the full exam lifecycle for 10 user roles, from students and invigilators to registrars and vice chancellors, in a single mobile codebase of 135 screens.',
    image: '/projects/smart-exam-screenshot.png',
    logo: null,
    icon: 'GraduationCap',
    tech: ['React Native', 'Expo', 'TypeScript'],
    category: 'Mobile App',
    client: 'University of Calabar',
    status: 'MVP'
  },
  {
    title: 'Chop-Spot',
    description: 'Food-ordering mobile app with sign-up, OTP and password reset, restaurant discovery and search, cart, coupons, checkout, saved addresses and order tracking. Built during my SpringCore Africa internship.',
    image: '/projects/chop-spot-screenshot.png',
    logo: null,
    icon: 'ShoppingBag',
    tech: ['React Native', 'Expo Router', 'TypeScript', 'React Query', 'Zustand'],
    category: 'Mobile App',
    client: 'SpringCore Africa (internship)',
    status: 'Ongoing'
  },
  {
    title: 'Quick Consult',
    description: 'Patient-facing mobile app for online medical consultation and appointment booking, connecting users with healthcare providers. The web version is released; the mobile app is in development.',
    image: null,
    logo: '/projects/quick-consult.png',
    icon: 'MessageSquare',
    tech: ['React Native', 'Expo', 'TypeScript'],
    category: 'Mobile App',
    client: 'SpringCore Africa (internship)',
    status: 'In development'
  },
  {
    title: 'Tasty Cart',
    description: 'Food-ordering mobile app built with React Native. The web version is released; the mobile app is in development.',
    image: null,
    logo: '/projects/tasty-cart.png',
    icon: 'ShoppingBag',
    tech: ['React Native'],
    category: 'Mobile App',
    client: 'Personal project',
    status: 'In development'
  },
  {
    title: 'RAMCE',
    description: 'Regime-Aware Momentum Composite Engine: a market-intelligence platform tracking 25 financial instruments, using GARCH volatility modelling, Hurst exponent and Shannon entropy to detect market regimes.',
    image: '/projects/ramce-screenshot.png',
    logo: null,
    icon: 'BarChart3',
    tech: ['Next.js', 'FastAPI', 'Supabase', 'Python'],
    category: 'FinTech / AI',
    client: 'Angelo Trading Academy',
    status: 'In Production'
  },
  {
    title: 'Angelo Technology',
    description: 'Multi-vertical digital education platform for the African market: learning tracks, bootcamps, a trading academy and a tools directory, with Paystack payments.',
    image: null,
    logo: '/projects/angelo-technology.png',
    icon: 'Cpu',
    tech: ['Next.js 14', 'Supabase', 'Paystack', 'TypeScript'],
    category: 'EdTech SaaS',
    client: 'Angelo Technology (own project)',
    status: 'Live'
  }
]

export const serviceData = [
  {
    icon: 'Cpu',
    title: 'Mobile apps',
    description: 'Cross-platform Android and iOS apps with React Native, Expo and TypeScript, including role-based navigation, authentication and API integration.',
    techStack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    icon: 'NextJS',
    title: 'Full-stack web apps',
    description: 'Web applications built with Next.js, React and Tailwind CSS, backed by Node.js or FastAPI, and Supabase or Convex for the database layer.',
    techStack: ['Next.js', 'React', 'FastAPI', 'Supabase', 'Convex'],
  },
  {
    icon: 'Code',
    title: 'API and payment integration',
    description: 'Connecting apps to REST APIs and third-party services, including Paystack payments.',
    techStack: ['REST APIs', 'Paystack'],
  },
  {
    icon: 'AIPowered',
    title: 'AI-assisted features',
    description: 'Adding LLM-powered features, such as document validation, to products, with careful prompt design.',
    techStack: ['LLM integration', 'Prompt engineering'],
  },
]

export const infoList = [
  { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, TypeScript, Python' },
  { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc Computer Science, University of Calabar (400 Level)' },
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: '20+ projects built across web and mobile' }
]

export const toolsData = [
    assets.vscode, assets.git
];
