import { useState, useEffect } from 'react'

export default function useTypewriter({ words }) {
    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [blink, setBlink] = useState(false)
    function type() {
        const currentWord = words[wordIndex]
        const shouldDelete = isDeleting ? 1 : -1
        setText((current) =>
            currentWord.substring(0, current.length - shouldDelete)
        )
        // Determine if this word is complete
        if (!isDeleting && text === currentWord) {
            // Make a pause at the end
            // start blink
            setBlink(true)
            setTimeout(() => {
                setIsDeleting(true)
                setBlink(false)
                // end blinking
            }, 2000)
        } else if (isDeleting && text === '') {
            setIsDeleting(false)
            // Move to the next word
            setWordIndex((current) => (current + 1) % words.length)
        } else {
            // setBlink()
        }
    }

    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? 50 : 100)
        return () => clearTimeout(timer)
    }, [wordIndex, isDeleting, text])
    return { text, blink }
}
