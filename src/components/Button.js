function Button({color,textColor,text,onClick}) {
  return (
    <button className='btn' style={{backgroundColor:color, color:textColor}} onClick={onClick}>{text}</button>
  )
}
export default Button
