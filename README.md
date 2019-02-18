# Get-Recipe

## Introduction

A project which uses an API to get the recipe of any drink by it's name, ingredient, category, etc. The selected drinks can be added to the storage. Google Chrome's local storage is being used for storing the selected drinks. 
Implemented Google Custom Search API to search for further information about the drink.

### Prerequisites

To run the project one will need any code editing tool like Visual Studio Code. 

Further API key will be required to use the Google Custom Search functionality. The steps are given below.


### Steps

To get the Google Custom Search API key required follow the steps below:

```
1. Sign in into your google account.
2. Open this [site](https://developers.google.com/custom-search/v1/using_rest).
3. Click on 'Identify your application' to get the API key.
4. After that go to the Control Panel.
5. Select your engine with which you want to perform the search.
6. The selected engine will be displayed, click on it and get the required code to set it.
7. Follow the steps and it will be done. 
```

To use the code for Google Custom Search, follow the steps:

```
1. Copy the code.
2. Go to favorites.html flie. 
3. Find the region where the code for the Custom Search is.
4. Replace it with your code.
5. Work is done.
```

## Running the program

For running the project successfully one will need a source code editor with a powerful developing tool. I preferably use Visual Studio Code. Atom, Brackets or any other will also work.

Make sure that the editor has a live server available.

Open the main index.html file in the source editor and in the field enter the name of the drink. Click on 'Search' button to search for the following recipe. A list of column cards will appear to choose from. At the back of the cards a button for adding the drinks to the local storage will be given. The drink can be also removed. In the favorite section custom search can be done using Google Custom Search.  


## Authors

* **Suyash Awasthi** - *Initial work* - [suyash2810](https://github.com/suyash2810)

## License

This project is licensed under the MIT License - see the [LICENSE.md]() file for details

