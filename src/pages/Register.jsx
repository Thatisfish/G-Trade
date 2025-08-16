import Login from '../components/Login'
import { useState } from 'react';



const Register = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )
      }
    </>
  )
}

export default Register


// 要重新觸發的時候用的
// const [showLogin, setShowLogin] = useState(false);

// return (
//   <>
//     <Icon onClick={() => setShowLogin(true)} />
//     {showLogin && <Login onClose={() => setShowLogin(false)} />}
//   </>
// );