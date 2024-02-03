# Karma Street View

![KarmaStreet View logo](https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png)

Traditional mapping services, such as Google Maps, fall short in meeting the specialized needs of private institutions like colleges. The inability to provide integrated outdoor and indoor 360-degree views of the campus poses a significant challenge. Moreover, concerns related to copyright from both Google and the institution further restrict the implementation of a comprehensive mapping solution. As a result, there is a critical need for a proprietary mapping system designed specifically for private institutions, offering a secure and tailored approach to address these limitations and enhance the overall mapping experience within the environment.

## Description

The Karma Street Viewer is a code-based project that provides an immersive panoramic view of a college street. It aims to create a virtual experience for users to explore and navigate through a detailed representation of the college environment.  
[- **WEBSITE**:](https://karma-street-view.mellob.in/view/gitam-ent-area-1)

[![Video Title](https://raw.githubusercontent.com/cyriljohn147/Tech-buzz/main/screenshots/p2.png)](https://raw.githubusercontent.com/cyriljohn147/Tech-buzz/main/screenshots/p2.png)

This proprietary mapping solution serves as an alternative to Google Maps specifically tailored for private educational institutions such as colleges. It goes beyond conventional mapping services by seamlessly integrating both outdoor and indoor 360-degree views of the campus. This unique approach addresses copyright considerations associated with both Google and the institution, ensuring a secure and tailored mapping experience for the educational environment.

## Key Features

### 1. Panoramic Navigation

Users can navigate through the college street using intuitive controls, such as dragging or using arrow keys. The panorama view provides a 360-degree perspective, allowing users to explore every corner of the street.

### 2. Interactive Hotspots

Highlight key locations or points of interest within the college street by adding interactive hotspots. Users can click on these hotspots to access additional information, images, or links related to specific areas or buildings.

### 3. Responsive Design

The project is designed to be responsive, ensuring a seamless experience across various devices, including desktops, tablets, and mobile phones.

### 4. Customization

Easily customize the project to represent different colleges or streets. Modify the images, hotspots, and other elements to tailor the experience t  o the unique features of each location.

### 5. Code Modularity

The codebase is organized into modular components, making it easy for developers to extend or modify specific functionalities. This modularity also facilitates future updates and maintenance.

### 6. Accessibility

Consideration for accessibility features, ensuring that the panoramic viewer is usable and enjoyable for users with diverse needs.

## Backend Technologies

### AWS App Sync:

AWS AppSync enables developers to connect their applications and services to data and events with secure, serverless and high-performing GraphQL and Pub/Sub APIs. You can do the following with AWS AppSync:

->Publish real-time data updates to your applications.  
->Only pay for API requests and any real-time messages that are delivered.

### AWS Amplify (for hosting):

AWS Amplify is a fully managed service by Amazon Web Services (AWS) designed to simplify the process of developing and deploying web applications. It provides a set of tools and services that make it easier for developers to build scalable and feature-rich web applications. Some key details about AWS Amplify are Continuous Deployment, Built-in Scalability
.
### GraphQL (API): 

GraphQL is like a superhero language for making apps talk to servers. Instead of asking for too much or too little information, it lets you ask for exactly what you need. It's like ordering a customized pizza instead of getting a fixed menu deal. This makes apps faster and saves data.

With GraphQL, developers can easily understand and organize the information they're working with, making it a friendlier way to build awesome apps!

### Dynamo DB (database):

DynamoDB is like a super-powered digital storage space made by Amazon.It's super quick, so you can find your stuff (or data) really fast whenever you need it.  It's perfect for making apps run smoothly and quickly!

## Frontend Technologies

### Tailwind CSS:

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.
- **Installation Of Tailwind CSS**

Tailwind CSS is available on npm, and you can install it using the following command:

```bash
npm install tailwindcss
```

### NextJS:

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

It allows you to focus on building your application instead of spending time with configuration

- **Installation of Next JS**

```bash
npx create-next-app@latest
```

On installation you will see the following prompts

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
