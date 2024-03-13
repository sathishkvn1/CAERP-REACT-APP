import apiService from "../services/apiService.jsx";;

const authAPI = {
    login: async (username, password,applicationKey) => {
        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            // formData.append('applicationKey', applicationKey);
      
            const response = await apiService.post('/admin-login', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            return response;
            
          } catch (error) {
            throw new Error('Failed to login');
          }
      },
  
    logout: async () => {
      try {
        const response = await apiService.post('/logout');
        return response;
      } catch (error) {
        throw new Error('Failed to logout');
      }
    },
  };
  
  export default authAPI;
