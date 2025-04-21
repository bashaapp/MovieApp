import {icons,images} from "../Constants";



export const MoviesTypes = [
   {
      id: "1",
      title: "All",
    },
    {
      id: 2,
      title: "Action",
    },
   
    {
      id: 3,
      title: "Drama",
    },
    {
      id: 4,
      title: "Crime",
    },
    {
      id: 5,
      title: "War",
    },
    {
      id: 6,
      title: "Romance",
    },
    {
      id: 7,
      title: "Fantasy",
    },
    {
      id: 8,
      title: "Adventure",
    },
  ]



  
  export const MoviesList= [
    {
      id: 1,
      name:"DON'T SPEACK",
      categories: [1],
      year:2000,
      director:'Omar',
      image: images.movie_1,
      desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },
    {
      id: 2,
      name:'CAPTIN AMERICA',
      categories: [1],
      year:2008,
      director:'Omar',
      image: images.movie_2,
      desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },
   {
      id: 3,
      name:'PATAHAN',
      categories: [1],
      year:1997,
      director:'ali',
      image: images.movie_3,
      desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },  
    {
        id: 4,
        name:'SIKANDAR',
        categories: [1],
        year:2001,
        director:'Sam',
        image: images.movie_4,
        desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },  
    {
          id: 5,
          name:'SIKANDAR2',
          categories: [1],
          year:2023,
          director:'Saleh',
          image: images.movie_5,
          desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },
    {
            id: 6,
            name:'CAPTIN AMERICA2',
            categories: [1],
            year:1999,
            director:'Omar',
            image: images.movie_6,
            desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },  
    {
              id: 7,
              name:'POLICE FORCE',
              categories: [1],
              year:2000,
              director:'Omar',
              image: images.movie_7,
              desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },  
    {
                id: 8,
                name:'BHOLAA',
                categories: [1],
                year:2020,
                director:'Sharukhan',
                image: images.movie_8,
                desc: 'The taste of coffee can vary depending on factors such as the type of beans',
      },  
  ]





export default {
    MoviesTypes,
    MoviesList,

}