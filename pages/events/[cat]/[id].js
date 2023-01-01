import {EventPerCityPage} from '../../../src/components/events/catEvent'

const EventPage = ({data}) => 
{
    return (
        <EventPerCityPage data={data}/>
    )
}

export default EventPage;


export async function getStaticPaths()
{
    const {allEvents} = await import ('../../../data/data.json');
    const allPaths = allEvents.map((path)=> {
        return {
            params: {
            cat: path.city,
            id: path.id,
        },
    };
    });

    return {
        paths: allPaths,
        fallback: false,
    } 
}


export async function getStaticProps (context)
{
    const id = context.params.id;
    const {allEvents} = await import ('../../../data/data.json');
    const eventData = allEvents.find(ev=> id ===ev.id);

    return {
        props: {data: eventData},
    }
}


