declare module 'mocha-param' {
	export default function itParam(desc: string, data: Array<any>, callback: (...args: any) => void): void;
}