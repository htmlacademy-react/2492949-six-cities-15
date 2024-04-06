import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { State, TAppDispatch } from '../types/index';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
