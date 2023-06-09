import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import Modal from "../UI/Modal"


const AddWorker = ({ setWorkers }) => {
  const [name, setName] = useState("")
  const [wage, setWage] = useState("")
  const [error, setError] = useState()

  const minWage = 8500

  const submitHandler = (event) => {
    event.preventDefault()
    if (
      name.trim().length === 0
    ) {
      setError({
        title: 'İsim Alanı Zorunludur!',
        message: 'Lütfen bir isim giriniz.'
      })
      return
    }

    if (+wage < minWage) {
      setError({
        title: 'Maaş Alanı Zorunludur!',
        message: `Lütfen ${minWage} TL'den yüksek bir tutar giriniz.`
      })
      return
    }

    setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 10000),
        name: name,
        wage: wage
      }, ...prevState
    ])

    setName('');
    setWage('');
  }

  const onConfirm = () => {
    setError(null)
  }

  return (
    <div className="flex flex-col flex-wrap content-center w-full">
      {error && <Modal error={error} onConfirm={onConfirm} />}
      <Card>
        <form className="flex flex-col" onSubmit={submitHandler}>
          <label htmlFor="name" className="text-sky-800 font-bold mb-1">
            Çalışan İsmi
          </label>
          <input
            className="rounded-lg p-1 outline-none"
            type="text"
            placeholder="Çalışan ismi yazınız"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <label htmlFor="wage" className="text-sky-800 font-bold mt-3 mb-1" >
            Maaş Miktarı
          </label>
          <input
            className="rounded-lg p-1 outline-none"
            type="number"
            placeholder="Maaş giriniz"
            id="wage"
            value={wage}
            onChange={(e) => setWage(e.target.value)} />
          <Button type='submit' className='mt-3'> Ekle </Button>
        </form>
      </Card>
    </div>

  )
}

export default AddWorker