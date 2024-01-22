/*
Em TypeScript, o "Structural Typing" (ou "Duck Typing") 
refere-se à verificação de tipos baseada na estrutura ou forma 
dos objetos, em vez de sua origem ou nome. Isso significa que os 
tipos são compatíveis se possuem a mesma estrutura, 
independentemente de terem sido definidos usando a mesma 
interface ou tipo.
*/

type VerifyUserFn = (user: User, setnVaule: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser: User = { username: 'Max', password: '123456' }; //com identidade User.
const sentUser = { username: 'Max', password: '123456' }; // Sem identidade.
const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);
