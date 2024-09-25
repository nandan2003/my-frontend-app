import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace this URL with your Azure Function App URL
    fetch('https://my-backend-api-1.azurewebsites.net/api/GetDataFunction?code=i5LQbVVMmOl7D220fMV65YJbMlyRgSfTIiMKk7JseLdzAzFucl8Oug%3D%3D')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React Frontend with Azure Backend</h1>
      <p>{data ? data : "Loading data..."}</p>
    </div>
  );
};

export default App;

