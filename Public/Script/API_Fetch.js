class API_Fetch {

    async getQueryApi(name) {
        //Querying the API to get drinks by name.
        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
        const response = await fetch(url);
        const data = await response.json();
        //Returning data as a single object.
        return {
            data
        }
    }
}