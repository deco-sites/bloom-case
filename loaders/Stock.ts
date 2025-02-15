/** @titleBy name */
interface Model {
    name: string,
    quantity: number,
    showOnSite: boolean
}

/** @titleBy name */
export interface Device {
    name: string,
    models: Model[]
}

export interface Props {
    devices: Device[]
}

const loader = ({ devices }: Props): Device[] => devices;

export default loader;