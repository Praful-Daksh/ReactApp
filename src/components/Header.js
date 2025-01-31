
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        console.log('click')
    }
  return (
  <header className='header'>
    <h1>{title}</h1>
    <Button color='black' text='Add' onClick = {onClick}/>
  </header>
  )
}



//css in js
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }
export default Header
