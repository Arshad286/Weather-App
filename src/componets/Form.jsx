import {Box, InputBase, Button, styled} from '@mui/material';
import { useState } from 'react';
import { getWeather } from '../services/api';

const Container = styled(Box)({
   padding : '10',
   background : '#445A6F'
});

const Input = styled(InputBase)({
   color : '0FFF',
   marginRight : 20,
   fontSize: 18
});

const GetButton = styled(Button)({
   background :  '#e77e22'
})

const Form = ({setResult}) =>{

const [data , setData] = useState({city:"" , country : ""})

const handleChange = (e)=>{
setData({...data,[e.target.name]: e.target.value})
console.log(data);

}

const GetWeatheInfo = async()  =>{
 let response = await getWeather(data.city , data.country);
 setResult(response);
}

   return (
    <Container>
           <Input placeholder='City'
            onChange={(e)=> handleChange(e)}
            name = 'city'
           />
           <Input placeholder='Country'
            onChange={(e)=> handleChange(e)}
            name = 'country'
           />
           <GetButton
           variant = "contain"

         onClick={(e) => GetWeatheInfo(e)}
           >Get Weather </GetButton>
    </Container>
   )
}

export default Form;