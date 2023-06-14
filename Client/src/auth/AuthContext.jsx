// AuthContext.js
import { createContext } from 'react';

const AuthContext = createContext();

export default AuthContext;

/**
 * using a separate file for createContext promotes better code organization, reusability, maintainability, and testability. It allows you to create and define the context object once and then import it into different files where you can use it with the appropriate Provider components. This approach makes your code more modular and easier to understand, especially as your application grows in complexity.
 */