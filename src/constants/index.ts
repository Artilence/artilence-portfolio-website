export const clientsArray: Client[] = [
    {
        id: 1,
        src: '/img/client_logos/agentaio.svg',
        alt: 'AgentIO'
    },
    {
        id: 2,
        src: '/img/client_logos/chopcast.svg',
        alt: 'Chopcast'
    },
    {
        id: 3,
        src: '/img/client_logos/tesla.svg',
        alt: 'Tesla'
    },
    {
        id: 4,
        src: '/img/client_logos/medtronic.svg',
        alt: 'Medtronic'
    },
    {
        id: 5,
        src: '/img/client_logos/lyftrondata.svg',
        alt: 'Lyftrondata'
    },
    {
        id: 6,
        src: '/img/client_logos/voiceai.svg',
        alt: 'Voice AI'
    },
    {
        id: 7,
        src: '/img/client_logos/firststep.svg',
        alt: 'Firststep.io'
    }
]


interface Client {
    id: number;
    src: string;
    alt: string;
}