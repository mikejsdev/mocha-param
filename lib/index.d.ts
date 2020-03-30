import { Context, Done, TestFunction } from 'mocha'


type ItParamTestFuncSync = <T>(desc: string, data: T[], callback: (this: Context, value: T) => void) => void;
type ItParamTestFuncAsync = <T>(desc: string, data: T[], callback: (this: Context, done: Done, value: T) => void) => void;
type ItParamTestFunc = ItParamTestFuncSync & ItParamTestFuncAsync;

type Utilities = { [P in keyof TestFunction]: ItParamTestFunc };

declare const itParam: ItParamTestFunc & Utilities;
export default itParam;
