import { Context, Done } from 'mocha'

export default function itParam<T>(desc: string, data: T[], callback: (this: Context, value: T) => void): void;
export default function itParam<T>(desc: string, data: T[], callback: (this: Context, done: Done, value: T) => void): void;
