import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function AOS() {
    useEffect(()=>{
        Aos.init()
    })
}

export default AOS