import {React, useState} from 'react'

export default function Form() {

    const [name, setName] = useState(null);
    const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.');
    const [flavor, setFlavor] = useState('coconut');

    

  const handChange =(event) => {
    const type = event.target.name;

    if(type === 'name'){
        setName(event.target.value);
    } else if (type === 'essay') {
        setEssay(event.target.value);
    } else if (type === 'flavor') {
        setFlavor(event.target.value);
    }
}


  const handleSubmit = (event) => {
    alert(`A name was submitted: ' + ${name}, ${essay} ${flavor}`);
    event.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={name} onChange={handChange} />
        </label>
        <label>
          Name:
          <textarea name="essay"  type="text" value={essay} onChange={handChange} />
        </label>

        <label>
          Pick your favorite flavor:
          <select name="flavor" value={flavor} onChange={handChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
