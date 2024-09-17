function Message({message,number})
{
return (
    <div className="message">
      {`Step ${number}: ${message}`}  
    </div>
)
}
export default Message