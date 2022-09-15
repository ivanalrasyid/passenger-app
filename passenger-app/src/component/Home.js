import { Component } from "react"
import {v4 as uuidv4} from 'uuid'


import ListPassenger from "./ListPassenger"
import PassengerInput from "./PassengerInput"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    nama: "Yoga",
                    umur: 22,
                    jenisKelamin: "Pria"
                },
                {
                    id: uuidv4(),
                    nama: "Yuni",
                    umur: 22,
                    jenisKelamin: "Wanita"
                },
                {
                    id: uuidv4(),
                    nama: "Ivan",
                    umur: 21,
                    jenisKelamin: "Pria"
                },
                {
                    id: uuidv4(),
                    nama: "Meyden",
                    umur: 22,
                    jenisKelamin: "Wanita"
                }
            ]
        }
  }

removeVisitor = (id) => {
 const newListVisitor = this.state.data.filter((item) => item.id !== id)

    this.setState({data : newListVisitor})
}

addVisitor = (newUser) => {
    const newVisitor = {id : uuidv4(), ...newUser}

    this.setState({data : [...this.state.data, newVisitor]})
}

  render () {

    return (
        <div>
            <ListPassenger data={this.state.data} removeVisitor={this.removeVisitor}/>
            <PassengerInput addVisitor={this.addVisitor} />
        </div>
    )
  }
}


export default Home;