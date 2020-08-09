<p align="center">
<img width="500" alt="horizontal_tagline_black_on_white_by_logaster (1)" src="https://user-images.githubusercontent.com/50145471/89743076-f2566b00-da75-11ea-9b35-bef6b3a45869.png">
</p>

## Description

In order to be able to test the database lock request, I added a 3 second delay on all POST requests.

The GET method does not have any kind of limitation.

Requirements : https://agileengine.bitbucket.io/fsNDJmGOAwqCpzZx/


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
<img width="1000" alt="Captura de Pantalla 2020-06-15 a la(s) 18 20 50" src="https://user-images.githubusercontent.com/50145471/84709923-85bd6500-af39-11ea-86f4-497367008b4b.png">
</p>


## Postman 
DEBIT

<p align="center">
<img width="600" alt="Captura de Pantalla 2020-06-15 a la(s) 18 21 20" src="https://user-images.githubusercontent.com/50145471/84709921-8524ce80-af39-11ea-9430-ce460933000a.png">
</p>


CREDIT

<p align="center">
<img width="600" alt="Captura de Pantalla 2020-06-15 a la(s) 18 21 40" src="https://user-images.githubusercontent.com/50145471/84709920-848c3800-af39-11ea-9280-5790e086e151.png">
</p>

GET LIST

<p align="center">
<img width="600" alt="Captura de Pantalla 2020-06-15 a la(s) 18 23 10" src="https://user-images.githubusercontent.com/50145471/84709916-835b0b00-af39-11ea-9f37-28465b69a302.png">
</p>

## Errors handled 

 WITOUT_FOUNDS = 'ERROR => WITOUT FOUND'

 ID_NOT_FOUND = 'ERROR => ID DOES NOT EXIST'

 AMOUNT_NEGATIVE = 'ERROR => THE AMOUNT CANNOT BE NEGATIVE'

 LOCK_DB = 'ERROR => WE ARE PROCESING YOU REQUEST , PLEASE TRY AGAIN LATER.'
 
 WRONG_TYPE = 'ERROR => ORNG TYPE OPERATION'
