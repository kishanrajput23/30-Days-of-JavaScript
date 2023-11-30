/*
Challenge 25 
Description:  
Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.  
Use any random API that you want  

Solution Approach:  
Utilize the .then method to chain promises.
*/

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; // Propagate the error
    });
}

function getData() {
  const apiUrl1 = 'https://jsonplaceholder.typicode.com/todos/1';
  const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/1';

  return fetchData(apiUrl1)
    .then(data1 => {
      console.log('Data from API 1:', data1);

      return fetchData(apiUrl2)
        .then(data2 => {
          console.log('Data from API 2:', data2);

          // Combine and return the results
          return { data1, data2 };
        });
    });
}

// Usage
getData()
  .then(result => console.log('Combined Result:', result))
  .catch(error => console.error('Error:', error));
  
