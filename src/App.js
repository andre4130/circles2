import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import Input from './components/Input';
import Output from './components/Output'

function App() {

  const [string, setString] = useState({
    string:''
  })

  const [reverseString, setReverseString] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setString(
        {
            ...string,
            [e.target.name]: e.target.value
        }
    )
}

const revString = (str) => {

  var splitString = str.split("")
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join(""); 
  setReverseString(joinArray)
}

useEffect(() => {
  revString(string.string);
}, [string])

  return (
    <div className=''>
      <Input 
      handleChange={handleChange}
      />
      <div className="container-fluid" style={{height:"95vh", display: 'flex', alignItems: 'center'}}>
        <Output 
        reverseString={reverseString}
        />
      </div>

    </div>
  );
}

export default App;
