#Wasseerstoff Frontend Assignment

The tech stach for this project consisted of:
* React JS as the base
* Chart JS for the bar and bubble charts
* D3 JS for the hexagon-tiled map
* Bootstrap framework for icons
* Google Fonts for the fonts
* react-router-dom for linking the various webpages

Steps to create and run this project:
In the VSCode terminal, type the following lines in order:
* npx create-react-app 'app-name'
* cd 'app-name'
* code .
Then start editing App.js to to see changes and type npm start to see the changes implemented in http://localhost:3000/

Video Explanation:

Approach to the task:
I created separate components that represented a part of the website. For ex, the Navbar component represents the navigation bar. All the CSS styling and typography came from the figma files and the fonts were provided via Google fonts. The hexagon map was built with the d3-js library that takes a picture as the input and draws hexagons on it accordingly. I chose terrain elevation levels as the input and so, the hexagons are colored darker where the elevation is higher and lighter where the elevation is lower. To represent all the data in figma like sales figures and users, I created a json file and inputed data that resembles the figma data as closly as possible. The bar chart and bubble chart were made with the Chart JS library. The bar chart data is randomly chosen but the bubble chart data represents the figma data exactly. For the bubbles, the x value is the month (1.5 means the middle of January, etc.) and the y value is the amount made in that month. Overall, clicking on the 'Overview' button on the navigation bar will bring you to the hexagonal map with widgets. And the 'Analytics' tab brings the user to the 3rd page from the figma file. This is where the deadline was approaching and so I submitted what I managed to do in that time frame.

# A few pictures of the end result

![pic1](https://user-images.githubusercontent.com/93438794/218343285-e5941388-7cb9-4fea-8d3e-6d3130cbe7e2.png)

![pic2](https://user-images.githubusercontent.com/93438794/218343289-27ce4dfe-71e1-4474-ba77-6ac444568a8e.png)

![pic3](https://user-images.githubusercontent.com/93438794/218343294-4921ca1a-01d4-4ea0-9a70-355da35492f3.png)
