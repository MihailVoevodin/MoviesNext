export const MovieAboutBox = ({array, boxType}: any) => {
    const filteredArray = array.filter((a: any) => a.type == boxType)

    return (
        <>
            {filteredArray.map((a: any, id: number) => <span key={id}>{a.symbol}{a.amount.toLocaleString('ru')}</span>)}
        </>
    )
}
