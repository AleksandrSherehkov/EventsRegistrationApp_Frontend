# Events Registration App

## Overview

Events Registration App is a web-based application designed for managing event
registrations. This application offers three levels of complexity: base, middle,
and advanced. While the base level is sufficient to pass the test task stage,
accomplishing tasks with higher complexity will significantly increase your
chances of getting into the school.

## Features

### Base Level

- **Events Board Page**: Displays a paginated list of available events.
  - Event details include title, description, event date, and organizer.
- **Event Registration Page**: Users can register for events through a form that
  captures full name, email, date of birth, and how they heard about the event.
- **Event Participants Page**: Shows a list of registered participants for an
  event.

### Middle Level

- All features from the base level.
- **Sorting**: Sort events by title, event date, or organizer on the events
  board page.
- **Form Validation**: Implement validation on the event registration form.
- **Search Participants**: Search for participants by full name or email on the
  event participants page.

### Advanced Level

- All features from the middle level.
- **Infinite Scroll**: Implement infinite scroll pagination on the events board
  page.
- **Registration Statistics**: Display line/bar charts showing the number of
  registrations per day for each event.
- **Automated Event Fetching**: Implement a script that periodically fetches
  events from a third-party API and stores them in the database.

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, NextUI
- **Backend**: Node.js (with or without frameworks)
- **Database**: Any relational or non-relational database
- **Other Libraries**: Axios, clsx, date-fns, date-fns-tz, framer-motion,
  lodash.debounce, react-icons, react-infinite-scroll-component, SWR,
  tailwind-scrollbar, zod

## Requirements

1. **Add instructions in the README.md file on how to run the application.**
2. **Upload source code to GitHub/BitBucket/GitLab and share a link.**
3. **Host the application in any preferable way and share the URL to access
   it.**
4. **Frontend**: Must be done in HTML/CSS/JavaScript (with or without any
   framework), with any preferred design style.
5. **Backend**: Can be done in NodeJS with or without any framework.
6. **Database**: Use any relational or non-relational database.

## Running the Application

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   \`\`\`bash git clone
   https://github.com/AleksandrSherehkov/events_frontend.git cd events_frontend
   \`\`\`

2. Install dependencies:

   \`\`\`bash npm install

   # or

   yarn install \`\`\`

### Running Locally

1. Start the development server:

   \`\`\`bash npm run dev

   # or

   yarn dev \`\`\`

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see
   the result.

### Building for Production

1. Build the application:

   \`\`\`bash npm run build

   # or

   yarn build \`\`\`

2. Start the production server:

   \`\`\`bash npm start

   # or

   yarn start \`\`\`

### Deployment

1. Deploy the application using your preferred method. For example, using
   Vercel:

   \`\`\`bash vercel \`\`\`

## Hosting and URL

- Ensure the application is hosted and accessible at the provided URL.

## Contributing

Feel free to contribute by submitting pull requests, reporting issues, or
suggesting features.

## License

This project is licensed under the MIT License.

---

### Contact

For any inquiries, please contact:

- [Oleksandr](aleksandr.shereshkov@gmail.com)

---

Thank you for using the Events Registration App!
