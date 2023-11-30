import axios from "axios"

const initializeApp = () => {
    
    axios.interceptors.request.use(function (config) {
        // UPDATE: Add this code to show global loading indicator
        document.body.classList.add('loading-indicator');
        return config
      }, function (error) {
        return Promise.reject(error);
      });
      
      axios.interceptors.response.use(function (response) {
        // UPDATE: Add this code to hide global loading indicator
        document.body.classList.remove('loading-indicator');
        return response;
      }, function (error) {
        document.body.classList.remove('loading-indicator');
        return Promise.reject(error);
      });

}

export default initializeApp