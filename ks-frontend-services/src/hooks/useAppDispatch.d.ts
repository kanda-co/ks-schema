import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
export declare const createAppDispatchHook: <State, Dispatch extends ThunkDispatch<State, unknown, any>>() => () => Dispatch;
