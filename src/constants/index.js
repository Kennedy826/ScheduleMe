import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, img1, img2, img3, shoe4, shoe5, shoe6, shoe7, thumbimg1, thumbimg2, thumbimg3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" }, 
   
    { href: "about-us", label: "About Us" }, // original
    { href: "#functionalities", label: "Functionalities" },
    { href: "#reviews", label: "Reviews" },
    // { href: "#products", label: "Products" },
    { href: "contact-us", label: "Contact Us" },
];

// export const shoes = [ 
//     { 
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];
export const imgs = [ 
    { 
        thumbnail: img1,
        moneyImage: img1,
    },
    {
        thumbnail: img2,
        moneyImage: img2,
    },
    {
        thumbnail: img3,
        moneyImage: img3,
    },
];

export const statistics = [
    { value: '1k+', label: 'customers' },
    { value: '500+', label: 'visitors' },
    { value: '250k+', label: 'downloads' },
];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

export const services = [
    {
        imgURL: truckFast,
        label: "Take control",
        subtext: "Take control of your budget track progress, and make informed decisions :)"
    },
    {
        imgURL: shieldTick,
        label: "Secure Data",
        subtext: "Secure data storage, data export options, and reliable service :)"
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our  team is here to assist you every step of the way :)"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: '- Morich Brown',
        rating: 4.5,
        feedback: "This web app has been a game-changer for my finances. I finally know where my money is going!"
    },
    {
        imgURL: customer2,
        customerName: '- Sarah J',
        rating: 4.5,
        feedback: "It's so easy to use, I actually enjoy tracking my expenses now!"
    },
    {
        imgURL: customer3,
        customerName: '- Zele k',
        rating: 4.3,
        feedback: "I love this web app, I'm saving more money than ever!"
    }
];


export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            { name: "Home", link: "home" },
            { name: "About Us", link: "about-us" },
            { name: "Functionalities", link: "#functionalities" },
            { name: "Reviews", link: "#reviews" },
            { name: "Contact Us", link: "contact-us" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "aboutus" },
            { name: "Contact us", link: "contactUs" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@pesabuddy.com", link: "mailto:customer@pesabuddy.com" },
            { name: "+237650028614", link: "tel:+237650028614" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];