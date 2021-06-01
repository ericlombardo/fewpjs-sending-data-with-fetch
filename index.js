function submitData(name, email){
  const action = 'http://localhost:3000/users';
  let formData = { name: name, email: email };
  
  let configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  return fetch(action, configObj)
  .then(resp => resp.json())
  .then(jresp => AppendData(jresp))
  .catch((error) => handleError(error))
}

function AppendData(jresp){
  let id = jresp.id;
  document['body'].append(id);
}
function handleError(error){
  document.body.append(error.message);
}

