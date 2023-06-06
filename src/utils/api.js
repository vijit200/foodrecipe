import axios from "axios";


export const fetchDataFromApi = async(url)=>{
// const options = {
//     method: 'GET',
//     url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
//     params: {
//       query: `${url}`
//     },
//     headers: {
//       'X-RapidAPI-Key': '7bade25494msh99f0ba1c6e571d0p1c70edjsn40fa10e3a26a',
//       'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//     //   console.log(response.data);
//         return response
//   } catch (error) {
//       console.error(error);
//   }

const options = {
  method: 'GET',
  url: 'https://edamam-recipe-search.p.rapidapi.com/search',
  params: {q: `${url}`},
  headers: {
    'X-RapidAPI-Key': '7bade25494msh99f0ba1c6e571d0p1c70edjsn40fa10e3a26a',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  return response
} catch (error) {
	console.error(error);
}
}