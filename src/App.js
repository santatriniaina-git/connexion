import React, {useState} from 'react';
import {SvgPasswordNoView, SvgPasswordView} from './routes/IconeSvg';
import Input from "./components/input/Input";
import './App.css';

const App = () =>{

  const [PasswordType, setPasswordType] = useState("password")

  const toggleInputPasswordType = () => {
    setPasswordType((type) => type !== "password"? "password": "text")
  }
  return (

  <div className="div">
    <div className ="flex flex-wrap justify-center mt-20">
      <div className="max-w-sw box-shadow bg-white ">
        <div class="mx-auto h-12 w-auto">
          <h2 className="mt-6 text-center text-4xl font-serif regular">Connectez-vous</h2>
        </div>
        <Input
          type="text"
          placeholder="Email"
          className="apparence-none font-serif border rounded-b-md w-full px-3 py-2 text-gray-700 placeholder-gray-500"
          label="Email"
        />
        <Input 
          type="text"
          placeholder="Adresse personnel"
          className="appearance-none border font-serif rounded w-full px-3 py-2 text-gray-700 placeholder-gray-500"
          label="Adresse personnel"
        />
        <Input 
          type="text"
          placeholder="Password"
          className="appearance-none border font-serif rounded w-full px-3 py-2 text-gray-700 placeholder-gray-500 "
          label="Password"
        />

        {/* <form action= "" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 text-sm font-serif mb-5">
              Email
            </label>
            <input type="text" className="apparence-none font-serif border rounded-b-md w-full px-3 py-2 text-gray-700 placeholder-gray-500 "
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-700 text-sm font-serif mb-5">
              Mot de passe 
            </label>
          <div className="relative">
            <input type={PasswordType} className="appearance-none border font-serif rounded w-full px-3 py-2 text-gray-700 placeholder-gray-500 "
              placeholder="Mot de passe"
            />
          <span className="absolute right-0 px-2 py-2 place-items-center" onClick={toggleInputPasswordType}>
            {PasswordType !== "password"? SvgPasswordView() : SvgPasswordNoView()}
          </span>
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="Personnal Adress" className="text-gray-700 text-sm font-serif mb-5">
              Adresse personnel
            </label>
            <input type="text" className="appearance-none border font-serif rounded w-full px-3 py-2 text-gray-700 placeholder-gray-500"
             placeholder="Adresse"
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
            type="submit"
            className="group relative flex justify-center py-2 px-4 text-sm font-family rounded-md text-white bg-indigo-400 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
              Se connecter
            </button>
            <a href="#" className="text-sm font-family underline self-center text-black hover:text-blue-darker">Mot de passe oublié ?</a>
          </div>
        </form> */}
        <div className="flex items-center justify-between">
          <button 
            type="submit"
            className="group relative flex justify-center py-2 px-4 text-sm font-family rounded-md text-white bg-indigo-400 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
              Se connecter
          </button>
          <a href="#" className="text-sm font-family underline self-center text-black hover:text-blue-darker">Mot de passe oublié ?</a>
        </div>
        
      </div>
    </div>
</div>
  );
}
export default App;
