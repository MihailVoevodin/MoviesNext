import Link from 'next/link';

export const MovieAboutStaff = ({array, profession}: any) => {
    const filteredArray = array.filter((a: any) => a.professionKey == profession)

    if (filteredArray.length > 3) {
        return (
            <>
                {filteredArray.slice(0, 3).map((a: any, id: number) => <Link key={id} href={`/name/${a.staffId}`}>{a.nameRu}{id !== filteredArray.length - 1 ? ', ' : ''}</Link>)}
                <span> ...</span>
            </>
        )
    }

    return (
        <>
            {filteredArray.map((a: any, id: number) => <Link key={id} href={`/name/${a.staffId}`}>{a.nameRu}{id !== filteredArray.length - 1 ? ', ' : ''}</Link>)}
        </>
    )
}
