import { useState } from 'react';
import {Box, styled, Typography , FormControl, InputLabel, OutlinedInput,InputAdornment, Button, Input } from '@mui/material'
// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
// components
import Information from '../components/Information';
import { getWeather}  from '../service/api';

const Section = styled(Box)(({theme})=>({
   background: `url('https://images.pexels.com/photos/6033985/pexels-photo-6033985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
    width:'100%',
    height:'100vh',
    [theme.breakpoints.down('sm')]:{
      background: `url('https://images.pexels.com/photos/6033985/pexels-photo-6033985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` ,
      width:'100%',
     height:'100vh',
       
    }
   
}))
const Select = styled(Box)(({theme})=>({
  display:"flex",
  marginLeft:'auto',
  [theme.breakpoints.down('sm')]:{
    gap:'1vh',
    display:'block',
    width:'214px',
    fontSize:'1px',
    marginTop:'3vh',
   marginLeft:'-1vh'
    
   
}
}))
const Section1 = styled(Box)(({theme})=>({
  display:"flex",
  [theme.breakpoints.down('sm')]:{
   display:'block'
    
   
}
}))
const Heading = styled(Box)(({theme})=>({
fontSize:'50px',
fontWeight:'bold',
color:'rgba(0, 0, 0, 0.5)',
[theme.breakpoints.down('sm')]:{
   display:'flex',
   fontSize:'49px',

  
   
}

}))
const Section2 = styled(Box)(({theme})=>({
marginTop:'10vh',
marginLeft:'40rem',
[theme.breakpoints.down('sm')]:{
   marginLeft:'-8vh',

   marginTop:'-.3vh',
   height:'70vh'
    
 }

}))
const Get_Detail = styled(Button)(({theme})=>({
border:'.1px solid rgba(0, 0, 0, 0.5) ',
color:'#fff',

background:' black',
":hover":{
 background:'#e67e22',
 color:'#fff'
},
height:'43px',
marginTop:'1vh',
[theme.breakpoints.down('sm')]:{
   
    display:'flex',
   justifyContent:'center',
   alignItems:'center',
    height:'40px',
    fontSize:'10px',
    margin: '2vh auto'
   
}
}))
const InputLabels = styled(InputLabel)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
       display:'none'
    }
  
    
    }))
    const Error = styled(Typography)(({theme})=>({
   
      color: 'red',
      margin: 50,
      padding: 20,
      [theme.breakpoints.down('sm')]:{
      
         padding:'0',
         
      }
  }))
const Page1 = ()=>{
      const[result,setresult] = useState({})
      const[data,setData] = useState({City:'' , Country:''})

    const handleChange=(e)=>{
    setData( {...data,[e.target.name]: e.target.value})
    console.log(data)
    }
    const getWeatherInfo= async()=>{
      
       let response= await getWeather(data.City , data.Country  );
       setresult(response)
        
       

    }
    return(
      <Section >
        <Section1>
        <Heading >Weather Forecast</Heading>
        <Select >
        <FormControl variant="standard">
        <InputLabels htmlFor="input-with-icon-adornment">
          City
        </InputLabels>
        <Input
          placeholder='city'
          id="input-with-icon-adornment"
          onChange={(e)=>handleChange(e)}
          name="City"
          startAdornment={
            <InputAdornment position="end">
              <LocationOnIcon/>
            </InputAdornment>
          }
          
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabels htmlFor="input-with-icon-adornment">
          Country
        </InputLabels>
        <Input
         placeholder='country'
         onChange={(e)=>handleChange(e)}
         name="Country"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="end">
              <LocationOnIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
        </Select>
          <Get_Detail  onClick={()=>getWeatherInfo()}>Get Weather</Get_Detail>
        </Section1>
        <Section2>
       <Information result={result}/>
       </Section2>
      </Section>
    )
}
export default Page1