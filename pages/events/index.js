import {AllEventsPage} from '../../src/components/events/events-pages'


const EventsPage = ({data}) => 
{
    return (
        <AllEventsPage data = {data}/>
    )
}

export default EventsPage;

export async function getStaticProps()
{
    const {events_categories}= await import ('../../data/data.json');
    return {
        props: {
            data: events_categories,
        },
    };
}

