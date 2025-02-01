import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
  return (
  <header className='header'>
    <h1>{title}</h1>
    <Button color={showAdd ? 'red' : 'Black'} text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
  </header>
  )
}



//css in js
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }
export default Header
