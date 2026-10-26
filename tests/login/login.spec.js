import{test,expect} from '@playwright/test';
import loginData from '../../testData/login/login.json' with {type:'json'};

for(let data of loginData)
{
    console.log(data);
    if(data.status === 'valid')
    {
        console.log(data.name);
    }
    else{
        console.log(data.name);
    }
}