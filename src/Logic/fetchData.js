export default async function fetchData(){
    try{
        const data = await fetch('https://tellonymapu.herokuapp.com/find', {mode: "cors"})
        const real = await data.json()
        console.log(real)
        return real
    } catch(err){
        return err
    }
}