import React, { useState } from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { Col } from 'antd';
import { Provider, Network } from "aptos";


const provider = new Provider(Network.DEVNET);
const App = () => {
 const [counter, setCounter] = useState(0);

 const handleIncrement = () => {
   setCounter(counter + 1);
 };

 return (
   <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative', height: '100vh' }}>
     <div style={{ fontSize: '36px', marginBottom: '20px', fontFamily: 'cursive', color: '#3498db' }}>
       Counter - {counter}
     </div>
     <div
       style={{
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         background: '#3498db',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         cursor: 'pointer',
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
       }}
       onClick={handleIncrement}
     >
       <span style={{ color: '#fff', fontSize: '48px', fontFamily: 'sans-serif' }}>+</span>
     </div>
     <Col span={12} style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <WalletSelector />
    </Col>
   </div>
 );
};


export default App;


// import React, { useState, useEffect } from 'react';
// import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
// import { Layout, Row, Col, Button } from 'antd';
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import { Provider, Network } from "aptos";
// import TodoForm from './TodoForm';
// import Counter from './Counter';
// const [accountHasList, setAccountHasList] = useState(false);


// const provider = new Provider(Network.DEVNET);

// const App = () => {
//  const [counter, setCounter] = useState(0);
//  const { account } = useWallet();
//  useEffect(() => {
//   fetchList();
//  }, [account?.address]);
//  const [accountHasList, setAccountHasList] = useState(false);
//  const [todos, setTodos] = useState([]);

//  const handleIncrement = () => {
//   setCounter(counter + 1);
//  };

//  const fetchList = async () => {
//   if (!account) return [];
//   const moduleAddress = "0x3161fcabec8ab8de08f7438be2eb334a752eb85950d1b1f2d0c83f49fce9560b";
//   try {
//     const TodoListResource = await provider.getAccountResource(
//       account.address,
//       `${moduleAddress}::counter::Counter`
//     );
//     setAccountHasList(true);
//   } catch (e) {
//     setAccountHasList(false);
//   }
//  };

//  const addTodo = (todoText) => {
//   const trimmedText = todoText.trim();
//   if (trimmedText.length > 0) {
//     setTodos([...todos, trimmedText]);
//   }
//  };

//  const deleteTodo = (todoIndex) => {
//   const newTodos = todos.filter((_, index) => index !== todoIndex);
//   setTodos(newTodos);
//  };

//  return (
//   <>
//     {/* ... */}
//     <div>
//       <TodoForm
//         saveTodo={(todoText) => {
//           const trimmedText = todoText.trim();
//           if (trimmedText.length > 0) {
//             setTodos([...todos, trimmedText]);
//           }
//         }}
//       />
//       <Counter
//         todos={todos}
//         deleteTodo={(todoIndex) => {
//           const newTodos = todos.filter((_, index) => index !== todoIndex);
//           setTodos(newTodos);
//         }}
//       />
//     </div>
//   </>
//  );
// }

// export default App;
