import Link from 'next/link';
import Image from 'next/image';

export const CityEventsPage = ({data, pageName}) => {
    return (
        <div className='cat_events'>
            <h1>Event in {pageName.toString().toUpperCase()}</h1>
            <div className='content'>
                {data.map(ev => (
                    <Link className='card' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <Image width={300} height={300} alt={ev.title} src={ev.image}/>
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};