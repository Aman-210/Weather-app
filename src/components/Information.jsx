
import { Box, Typography, styled , TextField, InputAdornment, Input, } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud  , AccountCircle} from '@mui/icons-material'

const Section = styled(Box)(({theme})=>({
   
    [theme.breakpoints.down('sm')]:{
    
      marginLeft:'0vh'
     
  }
}))
const Row = styled(Typography)(({theme})=>({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10,
         },
    [theme.breakpoints.down('sm')]:{
     display:'flex',
     marginTop:'3vh',
     padding:'0',

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

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ?
        <Section style={{ margin: '30px 60px' }}>
            <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
            <Row><Opacity />Humidity: {result.main.humidity}</Row>
            <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
            <Row><Cloud />Clouds: {result.clouds.all}%</Row>
        </Section>
        : <Error>Please enter the values to check weather</Error>
    )
}

export default Information;