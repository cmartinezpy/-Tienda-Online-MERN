import { describe, it, expect, vi, beforeEach } from 'vitest';
import { logoutUser, loginUser } from './authActions';
import jwtDecode from 'jwt-decode';

// Mock jwt-decode
vi.mock('jwt-decode', () => {
    return {
        default: vi.fn()
    };
});

describe('AuthActions', () => {

    beforeEach(() => {
        // Limpiar mocks y localStorage antes de cada prueba
        vi.clearAllMocks();
        localStorage.clear();
    });

    // Prueba para el logout exitoso
    it('logout exitoso', () => {
        const dispatch = vi.fn();

        logoutUser(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGOUT',
            payload: {
                email: ''
            }
        });
    });

    // Prueba para el login exitoso
    it('loginUser exitoso', async () => {
        const credentials = { email: 'test@example.com', password: 'password123' };
        const dispatch = vi.fn();
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAYWRtaW4uY29tIiwicm9sIjoiYWRtaW4iLCJpYXQiOjE3MjE2OTg3Mjh9.Aa-H_a_vZOG3uqJgmM5fSKRXFLniA0BxUhC10ewJMmI';
        const decodedToken = { email: 'test@example.com', rol: 'admin' };

        // Mock fetch response
        window.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ token, ok: true }),
            })
        );

        // Mock jwtDecode
        jwtDecode.mockReturnValue(decodedToken);

        const result = await loginUser(credentials, dispatch);

        console.log('Result:', result);

        // Verificar que el resultado es 'done'
        expect(result).toBe('done');

        // Verificar que el token se guardó en localStorage
        expect(localStorage.getItem('jwt')).toBe(token);

        // Verificar que dispatch fue llamado con la acción correcta
        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN',
            payload: {
                email: decodedToken.email,
                rol: decodedToken.rol,
            },
        });
    });

    // Prueba para el login fallido
    it('loginUser fallido', async () => {
        const credentials = { email: 'test@example.com', password: 'password123' };
        const dispatch = vi.fn();

        // Mock fetch response
        window.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve({ error: 'Invalid credentials' }),
            })
        );

        const result = await loginUser(credentials, dispatch);

        console.log('Result:', result);

        // Verificar que el resultado es 'error'
        expect(result).toBe('error');

        // Verificar que dispatch fue llamado con la acción de logout
        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGOUT',
            payload: {
                email: '',
                rol: '',
            },
        });
    });

});