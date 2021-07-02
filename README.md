
# nonomo

This is a fictional web app that offers video entertainment. The project has been commissioned as a technical test.
Please be aware that some of the images used for the completion of the project might be copyrighted. 




## Features

**TV Shows and Movie list:** 
- Create a view that lists the most popular tv shows and movies. Only one of them should be displayed at a time, there should be the option to switch between them.
- Each item of the list should contain at least an image, the title and the vote average fields. 

**TV Show and Movie Detail:** 

- When an item is clicked on the list, create a tv show or movie detail view that shows extra info for the item on a separate screen.
- This should contain at least: A image, the title, the overview.
- The user should be able to see similar tv shows or movies in a section in the detail view.

**Fully responsive**

## Tech Stack

ReactJS, Redux, Typescript, ESlint, Jest, BEM, Sass.

  
## Demo

The code has been deployed using a temporary Netlify hosting service.

https://nonomo.netlify.app/

Chrome browser is recommended as flex gap property is still unconsistent in other browsers, such as Safari.
  
## Screenshots
![App Screenshot](https://i.ibb.co/t3HfCph/Captura-de-pantalla-2021-07-02-a-las-11-57-16.jpg)
![App Screenshot](https://i.ibb.co/Pzxjnqp/Captura-de-pantalla-2021-07-02-a-las-11-55-18.jpg)

  
## API Reference

Data from https://developers.themoviedb.org/3 

#### Get popular TV shows
```http
  GET /api.themoviedb.org/3/tv/popular
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get popular Movies
```http
  GET /api.themoviedb.org/3/movie/popular
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get details

```http
  GET /api.themoviedb.org/3/tv/{tv_id}
```
```http
  GET /api.themoviedb.org/3/movie/{movie_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get similar items

```http
  GET /api.themoviedb.org/3/tv/{tv_id}/similar
```
```http
  GET /api.themoviedb.org/3/movie/{movie_id}/similar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get images

```http
  GET /image.tmdb.org/t/p/original/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `path`      | `string` | **Required**. Picture path of item to fetch |
  


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

  
## Run Locally

- Clone the repo

```bash
  git clone https://github.com/dmartorell/movies-dev-challenge.git
```

- Install dependencies

```bash
  npm install
```

- Set environment variables following the example in `.env.example`

- Run the server

```bash
  npm run start
```

  
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

See the coverage file in folder `coverage/lcov_report`


**Reached code coverage: 94.17 %**


![App Screenshot](https://i.ibb.co/FmBbD65/jest-test-coverage.jpg)

## Feedback

If you have any feedback, please reach out to me at dani.martorell@gmail.com or at my [LinkedIn](https://www.linkedin.com/in/daniel-martorell/) profile. Thanks for your interest!
  
