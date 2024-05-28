// เริ่มเขียนโค้ดตรงนี้
async function getUsers(){
    let user = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let data = await user.json()
    return data
    
}
let fetchUser = async() => {
    try{
        let user = await getUsers()
        let nameover17Char = await user.map(user => user.name).filter(names => names.length > 17)
        console.log(nameover17Char);
    }catch{
        console.log(error);
    }
}
fetchUser()