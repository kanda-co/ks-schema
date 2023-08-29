import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import { AuthState } from '../store/slices/auth';
export declare const createAppDispatchHook: <State extends {
    auth: AuthState;
}, Dispatch extends ThunkDispatch<State, unknown, any>>() => () => Dispatch;
