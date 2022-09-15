const ListItem = ({item, removeVisitor}) => {


    return (
        <tr>
            <td>{item.nama}</td>
            <td>{item.umur}</td>
            <td>{item.jenisKelamin}</td>
            <td>
                <button onClick={()=>{removeVisitor(item.id)}} className="btn btn-primary">Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem;