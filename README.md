# ABOUT THIS APP

This app is a basic app built in response to a an engineering test for front end developmen position.\
I called the app fintech because it was the first concept that came to my mind when I was creating the app with create-react-app\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The API used for this application is the bitquery graphql api. The reason I choosed the bitquery api is due to my passion for blockchain technology and transactions

## `Technologies/Tools\Resources used in building this app`
The technologies and tools used in building this app are listed below :\
``1. React was used to build the UI: This was a requirement for the exercise``\
``2. The stylings were done with Chakra UI library and a bit of pure CSS``\
``3. Github was used to save the code and the link to the repo is `` [https://github.com/Klasss4Web/engineering-challenge.git](https://github.com/Klasss4Web/engineering-challenge.git)\
``4. API fetching was done with fetch. I decided to go with fetch instead of axios because I work with axios on daily basis and I want a feel of fetch``
``5  dayjs was used for handling dates and make them mored readable``\
``6. Bitquery graphql API is the open source api integrated into this app.`` [https://graphql.bitquery.io](https://graphql.bitquery.io)


## Steps to view this project on your local machine
``1. Clone the github repo ``[https://github.com/Klasss4Web/engineering-challenge.git](https://github.com/Klasss4Web/engineering-challenge.git)\
``2. Install all the dependencies for the project by running the command, "npm install"``\
``3. Run "npm start" to view the project on your browser``

Alternatively, you can view this app by clicking the link [https://engineering-challenge.netlify.app/](https://engineering-challenge.netlify.app) or copying and pasting the link to view the hosted app


## Description
This app basically shows transfer records between ``October, 01 2020 to October, 08 2020`` of an ERC21 token. 
I took guide for building this app especially the UI from a wireframe presented in this link [https://helicarrier.notion.site/Engineering-Challenge-f870aea032e14381ae4e404263534326](https://helicarrier.notion.site/Engineering-Challenge-f870aea032e14381ae4e404263534326)
The UI for this app consist of a table that shows the transaction records separated by diffrent dates
The fields on the table includes: \
``1. The unique ID for each transaction``\
``2. The transaction type, which is basically Ethereum transfer``\
``3. Total token transfered``\
``4. Address for the smart contract on the ethereum network``\
``5. The name of the token``\
``6. The standard of the token in the ethereum network, ERC20 in this case``\
``7. The exact time the transaction took place``\
``8. The address of the account that sent the token: senders address``\
``9. The address of the account that received the token: receivers address``\
``10.The status of the transaction, success or failed``

## Basic Functionalities
### Search bar
You can search for transactions by typing a specific date```(YYYY-MM-DD e.g 2020-10-05)``` on the search bar\
You can also search for transactions by typing a specific time```(hh:mm:ss e.g 05:41:02)``` on the search bar\
You can also search for transactions by typing a specific token amount```(e.g 50)``` on the search bar 

### Filter dropdown
You can filter transactions by date, token amount, time, sender's address, and receiver's address

### Usability and improvements
This app is quite user friendly and I am open for feedbacks on the usability. Personally, I think one area that needs improvement is the search field that takes a bit of time to respond due to the large volume of data available.



## Bonus
You can also view my other project where I fetched github's graphql api. Click the link or copy and paste it on your browser url field to view the project [https://github-access.netlify.app](https://github-access.netlify.app).\
You can search for any github user by typing the user's github user name, and view the users profile and his last 20 repositories