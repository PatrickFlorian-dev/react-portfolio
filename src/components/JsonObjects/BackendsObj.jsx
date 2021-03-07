
const BackendsObj = { 
    backends: [
        { 
            id : 1 , 
            title : 'Asp Net Core 3 (C#)',
            httpMethods : [
                { id : '1' , name : 'login', description: `Login using your username and password ` } , 
                { id : '2' , name : 'logout', description: `Logout using your username and password` } , 
                { id : '3' , name : 'getUserData', description: `Get your login data including auth token, username, and more` } , 
                { id : '4' , name : 'getAllDemoData', description: `Get's all demo data I put into the backend` } , 
                { id : '5' , name : 'postNewDemoData', description: `Post's new demo data I have in the backend` } , 
                { id : '6' , name : 'updateDemoData', description: `Updates a demo data credentials` } , 
                { id : '7' , name : 'softDeleteDemoData', description: `Soft deletes a demo data entry by setting the active parameter in the DB to 0 from 1` } 
            ], 
        },
        { 
            id : 2 , 
            title : 'Spring (Java)',
            httpMethods : [
                { id : '1' , name : 'login', description: `Login using your username and password ` } , 
                { id : '2' , name : 'logout', description: `Logout using your username and password` } , 
                { id : '3' , name : 'getUserData', description: `Get your login data including auth token, username, and more` } , 
                { id : '4' , name : 'getAllDemoData', description: `Get's all demo data I put into the backend` } , 
                { id : '5' , name : 'postNewDemoData', description: `Post's new demo data I have in the backend` } , 
                { id : '6' , name : 'updateDemoData', description: `Updates a demo data credentials` } , 
                { id : '7' , name : 'softDeleteDemoData', description: `Soft deletes a demo data entry by setting the active parameter in the DB to 0 from 1` } 
            ],  
        },
        { 
            id : 3 , 
            title : 'Ruby On Rails (Ruby)',
            httpMethods : [
                { id : '1' , name : 'login', description: `Login using your username and password ` } , 
                { id : '2' , name : 'logout', description: `Logout using your username and password` } , 
                { id : '3' , name : 'getUserData', description: `Get your login data including auth token, username, and more` } , 
                { id : '4' , name : 'getAllDemoData', description: `Get's all demo data I put into the backend` } , 
                { id : '5' , name : 'postNewDemoData', description: `Post's new demo data I have in the backend` } , 
                { id : '6' , name : 'updateDemoData', description: `Updates a demo data credentials` } , 
                { id : '7' , name : 'softDeleteDemoData', description: `Soft deletes a demo data entry by setting the active parameter in the DB to 0 from 1` } 
            ], 
        },
        { 
            id : 4 , 
            title : 'Django (Python)',
            httpMethods : [
                { id : '1' , name : 'login', description: `Login using your username and password ` } , 
                { id : '2' , name : 'logout', description: `Logout using your username and password` } , 
                { id : '3' , name : 'getUserData', description: `Get your login data including auth token, username, and more` } , 
                { id : '4' , name : 'getAllDemoData', description: `Get's all demo data I put into the backend` } , 
                { id : '5' , name : 'postNewDemoData', description: `Post's new demo data I have in the backend` } , 
                { id : '6' , name : 'updateDemoData', description: `Updates a demo data credentials` } , 
                { id : '7' , name : 'softDeleteDemoData', description: `Soft deletes a demo data entry by setting the active parameter in the DB to 0 from 1` } 
            ], 
        },
        { 
            id : 5 , 
            title : 'Laravel (PHP)',
            httpMethods : [
                { id : '1' , name : 'login', description: `Login using your username and password ` } , 
                { id : '2' , name : 'logout', description: `Logout using your username and password` } , 
                { id : '3' , name : 'getUserData', description: `Get your login data including auth token, username, and more` } , 
                { id : '4' , name : 'getAllDemoData', description: `Get's all demo data I put into the backend` } , 
                { id : '5' , name : 'postNewDemoData', description: `Post's new demo data I have in the backend` } , 
                { id : '6' , name : 'updateDemoData', description: `Updates a demo data credentials` } , 
                { id : '7' , name : 'softDeleteDemoData', description: `Soft deletes a demo data entry by setting the active parameter in the DB to 0 from 1` } 
            ], 
        },
    ] 
};

export default BackendsObj;
