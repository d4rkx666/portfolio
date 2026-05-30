const xuser = process.env.USER;
const xpassword = process.env.PASSWORD;

export function authenticated(user:string, password:string){
   if(xuser === user && xpassword === password){
      return true;
   }else{
      return false;
   }
}