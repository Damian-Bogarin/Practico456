import React,{useState, useEffect} from 'react';

const ClockF = () => {

    const initialDate = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [date, setDate] = useState(initialDate);




    useEffect(() => {
        const interval = setInterval(
            () => {
                setDate(
                    {
                        fecha: new Date(),
                        edad: date.edad + 1,
                        nombre: 'Martín',
                        apellidos: 'San José'
                    }
                )
            }, 1000
        )
        return () => {
            clearInterval (interval);
        };
    },  );

    

    return (
        <div>
            
         <h2>
         Hora Actual:
         {date.fecha.toLocaleTimeString()}
         </h2>
         <h3>{date.nombre} {date.apellidos}</h3>
         <h1>Edad: {date.edad}</h1>
         
        </div>
    );
}

export default ClockF;
