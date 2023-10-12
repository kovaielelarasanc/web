import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FaCoffee } from 'react-icons/fa';


import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Theme1 from "../src/assets/vilot.png";
import Theme2 from "../src/assets/red.png";
import Theme3 from "../src/assets/navy.png";
import Theme4 from "../src/assets/blue.png";
import Theme5 from "../src/assets/golden.png";
import Theme6 from "../src/assets/dark.png";
import Theme7 from "../src/assets/olive.png";
import Theme8 from "../src/assets/orange.png";
import Theme9 from "../src/assets/green.png";
import Theme10 from "../src/assets/yellow.png";

import Workone from "../src/assets/Work1.jpg";
import Worktwo from "../src/assets/Work2.jpg";
import Workthree from "../src/assets/Work3.jpg";
import Workfour from "../src/assets/Work4.jpg";
import Workfive from "../src/assets/Work5.jpg";
import Worksix from "../src/assets/Work6.jpg";


export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: "/",
    },
    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: "/about",
    },
    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: "/protfolio",
    },
    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: "/contact",
    },

];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'KOVAI ELELARASAN'
    },
    {
        id: 2,
        title: 'Last Name : ',
        description: 'C'
    },

    {
        id: 3,
        title: 'Age : ',
        description: '22 Years'
    },

    {
        id: 4,
        title: 'Freelance : ',
        description: 'Available'
    },
    {
        id: 5,
        title: 'Nationality : ',
        description: 'Indian'
    },
    {
        id: 6,
        title: 'Address : ',
        description: 'Coimbatore'
    },
    {
        id: 7,
        title: 'Phone : ',
        description: '+91 8778944714'
    },
    {
        id: 8,
        title: 'Email : ',
        description: 'kovaielelarasanc@gamil.com'
    },
    {
        id: 9,
        title: 'Languages : ',
        description: 'Tamil,English'
    },
];


export const stats = [
    {
        id: 1,
        no: '1+',
        title: 'Years of <br/> Experience'
    },
    {
        id: 2,
        no: '3+',
        title: 'Completed <br/> Projects'
    },
    {
        id: 1,
        no: '2+',
        title: 'Course <br/> Completed'
    },
    {
        id: 1,
        no: '10+',
        title: 'Codinge languages <br/> Known'
    },

];
export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: '90'
    },
    {
        id: 2,
        title: 'CSS',
        percentage: '90'
    },
    {
        id: 3,
        title: 'JavaScript',
        percentage: '90'
    },
    {
        id: 4,
        title: 'Bootstrap',
        percentage: '90'
    },
    {
        id: 5,
        title: 'Jquery',
        percentage: '90'
    },
    {
        id: 6,
        title: 'React JS',
        percentage: '90'
    },
    {
        id: 7,
        title: 'MySQL',
        percentage: '90'
    },
    {
        id: 8,
        title: 'Php',
        percentage: '90'
    },
    {
        id: 9,
        title: 'mongoDB',
        percentage: '90'
    },
    {
        id: 10,
        title: 'express JS',
        percentage: '90'
    },
    {
        id: 11,
        title: 'node JS',
        percentage: '90'
    },
];

export const resume = [
    {
        id: 1,
        category: 'Experienced',
        icon: <FaBriefcase />,
        year: '2023 present',
        title: 'Web developer <span> Pumo Technovation pvt ltd</span>',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
    {
        id: 2,
        category: 'Experienced',
        icon: <FaBriefcase />,
        year: '2023 present',
        title: 'Web developer <span> Pumo Technovation pvt ltd</span>',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
    {
        id: 3,
        category: 'Experienced',
        icon: <FaBriefcase />,
        year: '2023 present',
        title: 'Web developer <span> Pumo Technovation pvt ltd</span>',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
    {
        id: 4,
        category: 'Education',
        icon: <FaGraduationCap />,
        year: '2023 present',
        title: 'Web developer <span> Pumo Technovation pvt ltd</span>',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
    {
        id: 5,
        category: 'Education',
        icon: <FaGraduationCap />,
        year: '2023 present',
        title: 'Web developer <span> Pumo Technovation pvt ltd</span>',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
    {
        id: 6,
        category: 'Education',
        icon: <FaGraduationCap />,
        year: '2023 present',
        title: 'Web developer <span> Pumo Technovation pvt ltd</span>',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
];

export const portfolio = [
    {
        id: 1,
        img: Workone,
        title: 'Photo editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                desc: 'photo',
            },
            {
                icon: <FiUser />,
                title: 'Clint: ',
                desc: 'dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview: ',
                desc: 'www.dribble.com',
            },
        ],

    },
    {
        id: 2,
        img: Worktwo,
        title: 'Server Side',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                desc: 'photo',
            },
            {
                icon: <FiUser />,
                title: 'Clint: ',
                desc: 'dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview: ',
                desc: 'www.dribble.com',
            },
        ],

    },
    {
        id: 3,
        img: Workthree,
        title: 'Clint Side',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                desc: 'photo',
            },
            {
                icon: <FiUser />,
                title: 'Clint: ',
                desc: 'dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview: ',
                desc: 'www.dribble.com',
            },
        ],

    },
    {
        id: 4,
        img: Workfour,
        title: 'e-comerce',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                desc: 'photo',
            },
            {
                icon: <FiUser />,
                title: 'Clint: ',
                desc: 'dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview: ',
                desc: 'www.dribble.com',
            },
        ],

    },
    {
        id: 5,
        img: Workfive,
        title: 'Login Page',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                desc: 'photo',
            },
            {
                icon: <FiUser />,
                title: 'Clint: ',
                desc: 'dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview: ',
                desc: 'www.dribble.com',
            },
        ],

    },
    {
        id: 6,
        img: Worksix,
        title: 'Customer Service',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                desc: 'photo',
            },
            {
                icon: <FiUser />,
                title: 'Clint: ',
                desc: 'dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview: ',
                desc: 'www.dribble.com',
            },
        ],

    },
];



export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(339, 81%, 66%)',
    },
    {
        id: 2,
        img: Theme2,
        color: 'hsl(10, 100%, 54%)',
    },
    {
        id: 3,
        img: Theme3,
        color: 'hsl(242, 30%, 52%)',
    },
    {
        id: 4,
        img: Theme4,
        color: 'hsl(224, 76%, 58%)',
    },
    {
        id: 5,
        img: Theme5,
        color: 'hsl(42, 100%, 54%)',
    },
    {
        id: 6,
        img: Theme6,
        color: 'hsl(269, 75%, 56%)',
    },
    {
        id: 7,
        img: Theme7,
        color: 'hsl(76, 63%, 43%)',
    },
    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },
    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },
    {
        id: 10,
        img: Theme10,
        color: 'hsl(57, 100%, 54%)',
    },
];



















































