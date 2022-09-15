import { Component } from "react";

class PassengerInput extends Component {
    state = {
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
        editing: true
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin
        if (formIsNotEmpty) {
            const newData = {
                nama: this.state.nama,
                umur: this.state.umur,
                jenisKelamin: this.state.jenisKelamin
            }

            this.props.addVisitor(newData);
            this.setState({
                nama: "",
                umur: "",
                jenisKelamin: "Pria"
            })
        } else {
            alert ("Data masih ada yang kosong")
        }
    }
    
    handleOpenInput = () => {
        this.setState ({
            editing : false
        })
    }

    handelCloseInput = () => {
        this.setState ({
            editing : true
        })
    }

    render() {
        const viewMode = {}
        const editMode = {}

        if (this.state.editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }


        return (
            <div className="mt-5">
                <div onSubmit={() => {}} style={viewMode}>
                    <p>Masukan Nama Anda</p>
                    <input type="text" placeholder="Nama Anda" value={this.state.nama} name="nama" onChange={this.onChange}/>
                
                <p>Masukan Umur Anda</p>
                <input type="text" placeholder="Umur Anda" value={this.state.umur} name="umur" onChange={this.onChange}/>

                <p>Masukan Jenis Kelamin Anda</p>
                <select onChange={this.onChange} name="jenisKelamin">
                    <option value="Pria" selected>Pria</option>
                    <option value="Wanita" >Wanita</option>
                </select>
                <div>
                    <button className="btn btn-warning mt-4" onClick={this.handleSubmit}>Submit</button>
                    <button className="btn btn-outline-warning mt-4 ms-3" onClick={this.handleCloseInput}>Selesai</button>
                </div>
                </div>
                <button onClick={this.handleOpenInput} style={editMode} className="btn btn-warning mt-4">Masukan Nama Penumpang</button>
            </div>
        ) 
    }

}

export default PassengerInput;