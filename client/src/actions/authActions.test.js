import { describe, it, expect, vi } from 'vitest';
import { logoutUser } from './authActions';

describe('AuthActions', () => {
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
});