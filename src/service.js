import axios from 'axios';

const apiUrl = "http://localhost:5248"; // Make sure your backend is running on this URL
// Define default configuration URL.
axios.defaults.baseURL = 'https://localhost:1234';

// An interceptor to handle response errors
axios.interceptors.response.use(
  response => response, // Pass successful responses as-is
  error => {
    console.error("Axios Error:", error.message); // Log error messages
    return Promise.reject(error); // Reject the error to let the calling function handle it
  }
);


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Get all tasks
  getTasks: async () => {
    try {
      const result = await axios.get(`${apiUrl}/items`);
      return result.data; // Return the list of tasks
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
      return []; // Return an empty array as a fallback
    }
  },

  // Add a new task
  addTask: async (name) => {
    try {
      const result = await axios.post(`${apiUrl}/items`, { name });
      return result.data; // Return the created task
    } catch (error) {
      console.error('Error adding task:', error.message);
      return null; // Return null as a fallback
    }
  },

  // Update the completion status of a task
  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`${apiUrl}/items/${id}`, { isComplete });
      return result.data; // Return the updated task
    } catch (error) {
      console.error('Error updating task status:', error.message);
      return null; // Return null as a fallback
    }
  },

  // Delete a task
  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`${apiUrl}/items/${id}`);
      return result.data; // Return the deleted task
    } catch (error) {
      console.error('Error deleting task:', error.message);
      return null; // Return null as a fallback
    }
  },
};

// import axios from 'axios';

// const apiUrl = "https://localhost:5248";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
  
//   getTasks: async () => {
//     try {
//       const result = await axios.get(`${apiUrl}/items`);
//       return result.data;
//     } catch (error) {
//       console.error('Error fetching tasks:', error.message);
//       return []; // Return an empty array as fallback
//     }
//   },

//   addTask: async (name) => {
//     try {
//       console.log('addTask', name);
//       // TODO: Add task logic
//       return {}; // Replace with real response
//     } catch (error) {
//       console.error('Error adding task:', error.message);
//       return null; // Return null as fallback
//     }
//   },

//   setCompleted: async (id, isComplete) => {
//     try {
//       console.log('setCompleted', { id, isComplete });
//       // TODO: Update task logic
//       return {}; // Replace with real response
//     } catch (error) {
//       console.error('Error updating task status:', error.message);
//       return null; // Return null as fallback
//     }
//   },

//   deleteTask: async (id) => {
//     try {
//       console.log('deleteTask', id);
//       // TODO: Delete task logic
//       return {}; // Replace with real response
//     } catch (error) {
//       console.error('Error deleting task:', error.message);
//       return null; // Return null as fallback
//     }
//   },
// };
