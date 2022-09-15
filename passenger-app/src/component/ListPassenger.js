import ListItem from "./ListItem"

const ListPassenger = (props) => {
    const {data, removeVisitor} = props


    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    {/* <td></td> */}
                </thead>
                <tbody>
                    {data.map((passenger)=> <ListItem key={passenger.id} item={passenger} removeVisitor={removeVisitor}/>)}
                </tbody>
            </table>
        </div>
    )

}

export default ListPassenger;