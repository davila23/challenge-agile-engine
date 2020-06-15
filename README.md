
## Description

In order to be able to test the database lock request, I added a 3 second delay on all POST requests.

The GET method does not have any kind of limitation.



## Dependency Table
| Name        | Version           |
| ------------- |:-------------: |
| [Node.js](https://nodejs.org)      | ^8.3.0      |
| [TypeScript](https://www.typescriptlang.org) | 3      |
| [React](https://es.reactjs.org/) | ^16.13.1     |


## Installation

```bash
$ yarn install
```

## Running the App

```bash
# run
$ yarn dev

# build
$ yarn build
$ cd /server/build
```


## FrontEnd

URL: http://localhost:3000/


<p align="center">
  <img src="https://miro.medium.com/max/1400/1*r-UR2jA0fkNqU8OyC1g-cQ.png" width="600" alt="Logo" />
</p>


## Postman 


<p align="center">
  <img src="https://miro.medium.com/max/1400/1*UYEGsbo99M8jlx4DWZgqng.png" width="600" alt="Logo" />
</p>

Errors handled:

 WITOUT_FOUNDS = 'ERROR => WITOUT FOUND'

 ID_NOT_FOUND = 'ERROR => ID DOES NOT EXIST'

 AMOUNT_NEGATIVE = 'ERROR => THE AMOUNT CANNOT BE NEGATIVE'

 LOCK_DB = 'ERROR => WE ARE PROCESING YOU REQUEST , PLEASE TRY AGAIN LATER.'
 
 WRONG_TYPE = 'ERROR => ORNG TYPE OPERATION'