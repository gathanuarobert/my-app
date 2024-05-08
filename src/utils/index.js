export async function fetchRecipes(filter){
    const {query,limit} = filter;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&from=0&to=${limit}`;
    
    const response = await fetch(url) 
    
    const data = await response.json();
    
    return data?.hits;
}