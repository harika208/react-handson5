import '../App.css'

const Hoc=(Arg)=>{
    return ()=>{
        return(
            <div className="hoc">
                <Arg/>
            </div>
        )
        }
  
}
export default Hoc;