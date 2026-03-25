'use client';
import React, { useEffect, useRef, useState } from "react";
import '../../styles/bckBoxColor.css'

export default function BckBox({divWidth, divHeight}) {
    const CELLS = 80;
    const [totalBox, setTotalBox] = useState({columns: 0, rows: 0, total: 0})
    const arrGrids = Array.from({ length: totalBox.total })

    const [activeCells, setActiveCells] = useState(new Map())
    const colors = ['grid-blue', 'grid-cyan', 'grid-white']

    const wrappedRef = useRef(null)
    useEffect(()=> {
        let cols = Math.floor(divWidth / CELLS) + 1
        let rows = Math.floor(divHeight / CELLS) + 1

        setTotalBox({columns: cols, rows: rows, total: cols * rows});
        console.log(cols, rows)

    }, []);

    const boxColor = (index) => {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const neighbors = [[index],[index - 1], [index + 1], [index - totalBox.columns], [index + totalBox.columns], [(index - totalBox.columns) + 1], [(index - totalBox.columns) - 1], [(index + totalBox.columns) + 1], [(index + totalBox.columns) - 1]]

        setActiveCells(prev => {
            const newMap = new Map(prev)

            neighbors.forEach(([el])=> {

                  if (!newMap.has(el)) {
                        newMap.set(el, color)
                  }               

            })
            return newMap
            })

        setTimeout(() => {
            setActiveCells(prev => {
              const newMap = new Map(prev)
              neighbors.map(([el])=> {
                newMap.delete(el)
              })
              return newMap
            })
          }, 2000)
        }
        function randomSpark() {
            const getRandomNumber = Math.floor(Math.random() * arrGrids.length)
            const color = colors[Math.floor(Math.random() * colors.length)]

            setActiveCells(prev => {
                const sparkMap = new Map(prev)
                if(!sparkMap.has(getRandomNumber)) {
                    sparkMap.set(getRandomNumber, color)
                }
            return sparkMap
            })

            setTimeout(() => {
                setActiveCells(prev => {
                    const sparkMap = new Map(prev)
                    sparkMap.delete(getRandomNumber)
                    return sparkMap
                })
            }, 400);

        }
        
        useEffect(()=> {
            if(totalBox.total == 0) { return }

            const sparks = setInterval(() => {
                randomSpark()
                randomSpark()
            }, 2000);
            return () => clearInterval(sparks)
            
        }, [totalBox.total])
        console.log(arrGrids.length)
    return (
        <>
            <div ref={wrappedRef} className="gridContainer" style={{
                gridTemplateColumns: `repeat(${totalBox.columns}, ${CELLS}px)`,
                gridTemplateRows: `repeat(${totalBox.rows}, ${CELLS}px)`}}>
                    {arrGrids.map((el, inx)=> {
                        return (
                            <div key={inx} className={`gridCell ${activeCells.has(inx) ? activeCells.get(inx) : ''}`} onMouseOver={()=> boxColor(inx)}>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}