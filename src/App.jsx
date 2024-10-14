import React, { useCallback, useEffect, useRef, useState } from "react";

console.log();

function App() {
  const [password, setPassword] = useState("");
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setlength] = useState(16);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllowed) str += `!@#$%^&*()_+-={}[]|:;"'<>,.?/~`;

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numberAllow, charAllowed, length, setPassword]);

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllow, charAllowed, length, passwordGenerator]);

  return (
    <>
      {/* <div className="bg-zinc-900 w-full h-screen flex items-start justify-center">
        <div className="w-[40vw] h-[24vh] bg-zinc-700 mt-20 px-5 py-3 rounded-lg">
          <h1 className="text-2xl text-white font-semibold">
            Password Generator :
          </h1>
          <div className="flex items-center justify-center gap-5 mt-5">
            <input
              className="w-full h-12 rounded-sm"
              value={password}
              type="text"
              ref={passwordRef}
            />
            <button
              id="copy"
              className="bg-blue-500 h-12 text-white px-4 py-1 rounded"
              onClick={copyToClipBoard}
            >
              Copy
            </button>
          </div>
          <div className="relative mt-7 flex items-center gap-5 text-white text-lg font-semibold">
            <input
              id="length"
              type="range"
              min="8"
              max="99"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              className=""
            />
            <label for="length" className="">
              Length: {length}
            </label>
            <label class="flex items-center">
              <input
                id="chars"
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="mr-2 w-5 h-5"
              />
              {console.log(charAllowed)}
              <span>Allow Characters</span>
            </label>
            <label class="flex items-center">
              <input
                id="numbers"
                type="checkbox"
                defaultChecked={numberAllow}
                onChange={() => setNumberAllow((prev) => !prev)}
                className="mr-2 w-5 h-5"
              />
              <span>Allow Numbers</span>
            </label>
          </div>
        </div>
      </div> */}
      <div className="min-w-screen min-h-screen bg-zinc-900 flex items-center justify-center px-5 py-5">
        <div className="w-full md:w-[40vw] mx-auto rounded-lg bg-white shadow p-5 text-gray-800">
          <div className="flex items-center justify-center overflow-hidden">
          <img className=" w-44 rounded-full object-contain scale-[2.2]" src="/images/mylogo.webp" alt="" />
          </div>
          <div className="relative mb-2 ">
            <label class="block text-xs font-semibold text-gray-500 mb-2">
              PASSWORD
            </label>
            <input
              id="password"
              value={password}
              type="text"
              ref={passwordRef}
              className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Password"
            />
          </div>
          <hr class="my-5 border border-gray-200" />
          <div class="mb-2">
            <label class="block text-xs font-semibold text-gray-500 mb-2">
              PASSWORD LENGTH
            </label>
            <div className="flex gap-5">
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Length"
                value={length}
              />
              <button
                id="copy"
                className="bg-blue-600 hover:bg-indigo-700 h-12 text-white px-4 py-2 rounded-md"
                onClick={copyToClipBoard}
              >
                Copy
              </button>
            </div>

            <input
              class="mt-5 w-full"
              type="range"
              min="8"
              max="99"
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
          </div>

          <div class="flex -mx-2">
            <div class="w-1/2 px-2">
              <label for="numbers">
                <input
                  type="checkbox"
                  className="w-4 h-4 align-middle"
                  id="numbers"
                  defaultChecked={numberAllow}
                  onChange={() => setNumberAllow((prev) => !prev)}
                />
                <span class="text-sm font-semibold text-gray-500 ml-1">NUMBERS</span>
              </label>
            </div>
            <div class="w-1/2 px-2">
              <label for="charsSymbols">
                <input
                  type="checkbox"
                  className="w-4 h-4 align-middle"
                  id="chars"
                  defaultChecked={charAllowed}
                  onChange={() => setCharAllowed((prev) => !prev)}
                />
                <span class="text-sm font-semibold text-gray-500 ml-1">SYMBOLS</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//  <div class="relative mb-2">
// <input  id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Password" />
// <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors"></button>
// </div>
// <div class="flex -mx-1">

// </div>
// <hr class="my-5 border border-gray-200"/>
// <div class="mb-2">
// <label class="block text-xs font-semibold text-gray-500 mb-2">PASSWORD LENGTH</label>
// <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Length" type="number" min="1" max="30" step="1"/>
// <input class="w-full" type="range" x-model="charsLength" min="1" max="30" step="1"/>
// </div>
// <div class="flex -mx-2 mb-2">
// <div class="w-1/2 px-2">
//     <label for="charsLower">
//         <input type="checkbox" class="align-middle" id="charsLower" checked/>
//         <span class="text-xs font-semibold text-gray-500">LOWERCASE</span>
//     </label>
// </div>
// <div class="w-1/2 px-2">
//     <label for="charsUpper">
//         <input type="checkbox" class="align-middle" id="charsUpper" checked/>
//         <span class="text-xs font-semibold text-gray-500">UPPERCASE</span>
//     </label>
// </div>
// </div>
// <div class="flex -mx-2">
// <div class="w-1/2 px-2">
//     <label for="charsNumeric">
//         <input type="checkbox" class="align-middle" id="charsNumeric" input="generatePassword()" checked/>
//         <span class="text-xs font-semibold text-gray-500">NUMBERS</span>
//     </label>
// </div>
// <div class="w-1/2 px-2">
//     <label for="charsSymbols">
//         <input type="checkbox" class="align-middle" id="charsSymbols" checked/>
//         <span class="text-xs font-semibold text-gray-500">SYMBOLS</span>
//     </label>
// </div>
// </div>
