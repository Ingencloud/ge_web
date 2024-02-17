 /* eslint-disable */
 import {jwtDecode} from "jwt-decode"
 function isAuthenticated() {
     // Check if user is authenticated by verifying the presence and validity of a JWT token in cookies
     const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
 
     if (cookie) {
         const token = cookie.split('=')[1]; // Extract token value from cookie
         try {
             // eslint-disable-next-line no-undef
             // const decodedToken = jwt_decode(token);
             const decodedToken = jwtDecode(token);
             const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
 
             // If token expiration time (exp) is greater than current time, token is valid
             return decodedToken.exp > currentTime;
         } catch (error) {
             console.error('Error decoding token:', error);
             return false; // Token is invalid or expired
         }
     }
 
     return false; // Token does not exist in cookies
 }
 
 export default isAuthenticated;