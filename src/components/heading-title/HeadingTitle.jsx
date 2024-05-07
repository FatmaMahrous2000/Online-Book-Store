const HeadingTitle = ({title}) => {
    return ( 
        <>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Dancing+Script:wght@700&family=Edu+SA+Beginner:wght@700&family=Lobster&family=Lumanosimo&display=swap');
</style>
        <div style={divStyle}>
          <h2 style={h2Style}>{title}</h2>
        </div>
        </>
     );
}
 
const divStyle={
    width:"100%",
    margin:"auto",
    padding:"30px",
    backgroundColor:"#fff",
    display:"flex",
    justifyContent:"center"
}

const h2Style={
    color:"#247bd2",
    fontSize:"40px",
    fontWeight:"",
    borderBottom:"2px solid #247bd2",
    paddingBottom:"5px",
    fontFamily:"Courgette"
    
    
}
export default HeadingTitle;