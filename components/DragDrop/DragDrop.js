import React, {useRef, useEffect, useState} from 'react';

const DragDrop = ({children}) => {
    const [dragging, setDragging] = useState('')
    const [dragCounter, setDragCounter] = useState(0)
    const dropRef = useRef()

   const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(dragCounter + 1)
        if(e.dataTransfer.items && e.dataTransfer.items.length > 0){
            setDragging(true)
            console.log(dragging)
        }
    }
    const handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(dragCounter - 1)
        if(dragCounter > 0){
            return setDragging(false)
        }
    }
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    useEffect(() => {
        let div = dropRef.current
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragleave', handleDragOut)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop)
    }, [])

    useEffect(() => {
        let div = dropRef.current
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragleave', handleDragOut)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop )
    }, [])

    return (
        <div ref={dropRef}>
            {dragging &&
             <div 
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0, 
              right: 0,
              zIndex: 9999
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>drop here :)</div>
            </div>
          </div>
        }
            {children}
        </div>
    );
};

export default DragDrop;