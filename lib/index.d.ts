import { Done } from 'mocha'

export default function itParam<T>(desc: string, data: T[], callback: (value: T) => void): void;
export default function itParam<T>(desc: string, data: T[], callback: (done: Done, value: T) => void): void;
