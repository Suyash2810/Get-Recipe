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

    async queryApiByIngredient(ingredient) {

        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        let response = await fetch(url);

        let data = await response.json();

        return {
            data
        }
    }

    async queryApiByCategory(category) {

        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
        let response = await fetch(url);

        let data = await response.json();

        return {
            data
        }
    }


    async queryApiByAlcoholPresence(presence) {

        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${presence}`;
        let response = await fetch(url);

        let data = await response.json();

        return {
            data
        }
    }

    async getCardById(id) {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        let response = await fetch(url);

        let data = await response.json();

        return {
            data
        }
    }
}