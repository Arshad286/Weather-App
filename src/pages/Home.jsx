import {Box, styled} from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../componets/Form';
import Information from '../componets/Information';
import { useState } from 'react';

const Image = styled(Box)({
    backgroundImage : `url(${Sunset})`, 
    width: '40%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius:'50px 0 0 50px'

})

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems:  'center',
    margin:'0  auto',
    width : '65%'
})

const Home = () =>{
    const [result, setResult] = useState({});

    return (
        <Component>
            <Image></Image>
            <Box style = {{width: '60%', height: '80%'}}>
                 <Form setResult= {setResult}/>
                <Information result = {result}/>
            </Box>
             </Component>
    )
}

export default Home;