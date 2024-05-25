# Frontend Interview Home Exercise

## Acceptance Criteria

1. **Number of Users Input:**

   - Utilize the existing Input component to allow users to specify the number of users to fetch.

2. **Live Search:**

   - Implement a live search feature using the provided Input component to fetch user data from [RandomUser API](https://randomuser.me/api?results={numberOfResults}) while user is typing.

3. **UserCard Component:**

   - Create UserCard component with the following requirements:
     - receives from props image, firstName, lastName
     - displays image and adds firstName and lastName underneath the image

4. **Slideshow Component:**
   - Create a Slideshow component from scratch that renders one UserCard at a time.
   - Use the list of already fetched users, switching the cards every 2 seconds.
   - Include "Start" and "Stop" buttons to control the slideshow.

## Features

- **Redux Data Store:**

  - Utilize Redux to store and manage the fetched user data.

- **Error Handling:**

  - Implement error-handling mechanisms for data fetching and user interactions.

- **Validations:**
  - Include input validation to ensure users provide a valid number of users to fetch.

## Restrictions

- **Use Only Installed Packages:**
  - Limit the use of external packages to those already installed and specified in the project.
