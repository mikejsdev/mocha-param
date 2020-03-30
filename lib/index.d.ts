import { Context, Done } from 'mocha'


type ItParamTestFuncSync = <T>(desc: string, data: T[], callback: (this: Context, value: T) => void) => void;
type ItParamTestFuncAsync = <T>(desc: string, data: T[], callback: (this: Context, done: Done, value: T) => void) => void;
type ItParamTestFunc = ItParamTestFuncSync & ItParamTestFuncAsync;

declare const itParam: ItParamTestFunc & {
	skip: ItParamTestFunc;
	only: ItParamTestFunc;
	retries: ItParamTestFunc;
}

export default itParam;
