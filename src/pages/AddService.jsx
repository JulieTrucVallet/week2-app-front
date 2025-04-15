import { useState } from "react"


const AddService = () => {

    const [serviceInfo, setServiceInfo] = useState({
        title : '',
        description : '',
        price : '',
        category : '',
        address : '',
        availability : null
    })

    const handleServiceSubmit = async () => {
        e.preventDefault()
        console.log('submit')
        try{
            const response = await axios.post(`http://localhost:8000/api/services`, serviceInfo, {
                headers : {
                    'Authorization' : `Bearer ${tokenStorage}`
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <>
            ADD SERVICE
            <div className="flex">
                <form action="">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={e => setServiceInfo({...serviceInfo, title: e.target.value})}/>

                    <label htmlFor="">Description</label>
                    <input type="text" onChange={e => setServiceInfo({...serviceInfo, description: e.target.value})}/>

                    <label htmlFor="">Price</label>
                    <input type="text" onChange={e => setServiceInfo({...serviceInfo, price: e.target.value})}/>

                    <label htmlFor="">Category</label>
                    <input type="text" onChange={e => setServiceInfo({...serviceInfo, category: e.target.value})}/>

                    <label htmlFor="">Address</label>
                    <input type="text" onChange={e => setServiceInfo({...serviceInfo, address: e.target.value})}/>

                    <label htmlFor="">Availability</label>
                    <input type="text" onChange={e => setServiceInfo({...serviceInfo, availability: e.target.value})}/>

                    <input type="submit" value='Add service'/>
                </form>
            </div>
        </>
    )
}

export default AddService