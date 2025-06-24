# Muscle Classics E-commerce

Welcome to the Muscle Classics E-commerce project! This application is built using React.js and is designed for a business that sells muscle cars and classic cars, as well as providing car modification services, detailing, and other premium auto services.

## Project Structure

The project is structured as follows:

```
muscle-classics-ecommerce
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── CarCard.jsx
│   │   ├── CarFilter.jsx
│   │   ├── CartItem.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   └── BookingForm.jsx
│   ├── context
│   │   └── CartContext.jsx
│   ├── data
│   │   ├── cars.json
│   │   └── services.json
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Cars.jsx
│   │   ├── Services.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── routes.jsx
│   └── styles
│       └── tailwind.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Features

- **Home Page**: A welcoming landing page for users.
- **Cars Listing/Shop Page**: Displays a list of available cars with filtering options.
- **Service Page**: Details the services offered, including car detailing, PPF, ceramic coating, and custom builds.
- **Cart Page**: Allows users to view and manage their selected cars and services.
- **Contact/About Page**: Provides contact information and details about the business.

## Technologies Used

- **React.js**: For building the user interface with functional components and hooks.
- **React Router**: For routing between different pages.
- **Tailwind CSS**: For styling the application.
- **React Context API**: For managing the cart state.
- **JSON**: For dummy data representing cars and services.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/muscle-classics-ecommerce.git
   cd muscle-classics-ecommerce
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Deployment

This project can be deployed on platforms like Vercel or Netlify. Follow these steps for deployment:

### Vercel

1. Sign in to [Vercel](https://vercel.com).
2. Import your GitHub repository.
3. Follow the prompts to deploy your application.

### Netlify

1. Sign in to [Netlify](https://www.netlify.com).
2. Click on "New site from Git".
3. Connect your GitHub repository and follow the prompts to deploy.

## Usage

- Navigate through the website using the Navbar.
- Browse cars and filter them based on various criteria.
- View services and book them using the Booking Form.
- Manage your cart and proceed to checkout.

## Contributing

Feel free to submit issues or pull requests to improve the project!

## License

This project is licensed under the MIT License.